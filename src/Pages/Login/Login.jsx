import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import Logo from "../../img/Romeh-removebg-preview.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("املأ كل البيانات");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("الإيميل غير صحيح");
      return;
    }

    if (password.length < 6) {
      setError("الباسورد أقل من 6 حروف");
      return;
    }

    setError("");
    alert("Login Success ✅");
  };

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={handleSubmit}>
        {/* Logo فوق كلمة Login */}
        <img src={Logo} alt="Logo" className="login-logo" />

        <h2>Login</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don't you have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
