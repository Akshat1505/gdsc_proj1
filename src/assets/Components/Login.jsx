import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const pass = e.target[1].value;
    try {
      const resp = await signInWithEmailAndPassword(auth, email, pass);
      console.log(resp);
      navigate("/dashboard");
    } catch (error) {
      alert("Incorrect! Username/Password")
    }
  };
  const handleReset = () => {
    navigate("/reset");
  };
  return (
    <div className="login-page">
      <span className="welcome">Welcome To KPI DASHBOARD</span>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className="emailBox">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="passBox">
            <input type="password" placeholder="Your Password" required />
          </div>
          <span className="forgo-login" onClick={handleReset}>
            Forgot Password ?
          </span>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
