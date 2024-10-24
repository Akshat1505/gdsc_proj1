import "./App.css";
import Login from "./assets/Components/Login";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Dashboard from "./assets/Components/Dashboard";
import ForgotPassword from "./assets/Components/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
