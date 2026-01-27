import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      setError("املأ كل البيانات");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("الإيميل غير صحيح");
      return;
    }

    if (form.password.length < 6) {
      setError("الباسورد لازم يكون 6 حروف على الأقل");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("الباسورد مش متطابق");
      return;
    }

    setError("");
    alert("Register Success 🎉");
  };

  return (
    <div className="register-page">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        {error && <p className="register-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />

<Link to="/login">
        <button type="submit">Register</button>
</Link>
        <p>
         Do you have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
