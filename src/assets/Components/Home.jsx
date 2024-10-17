import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [chartData, setChartData] = useState({
    labels: [2, 1, 4, 5, 6, 4, 1, 4, 6, 7, 8, 1, 10, 9, 8],
    datasets: [
      {
        label: "Stats",
        data: [3, 1, 3, 4, 1, 5, 3, 1, 4, 5, 6, 10, 9, 1],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const socket = io("https://data.gdscnsut.com");

    socket.on("random_number", (data) => {
      const randomNumber = data;
      const currentTime = data.number;

      setChartData((prevData) => ({
        labels: [...prevData.labels, currentTime],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, randomNumber],
          },
        ],
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 1,
        max: 10,
      },
    },
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-in">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-in">
            <h3>CATOGORIES</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-in">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>200</h1>
        </div>
        <div className="card">
          <div className="card-in">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>36</h1>
        </div>
      </div>

      <div className="charts">
        <h2>STATS </h2>
        <Line data={chartData} options={options} />
      </div>
    </main>
  );
};

export default Home;
