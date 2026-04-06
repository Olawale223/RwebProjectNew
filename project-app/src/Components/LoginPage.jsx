import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function LoginPage({ onSwitchToSignup }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(userEmail) {
    setEmail(userEmail);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  function notify(param, type = "info") {
    toast[type](param);
  }

  function showTrue() {
    notify("✅ Login Successful!", "success");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (res.data?.token) {
        
        localStorage.setItem("token", res.data.token);

        showTrue();
      } else {
        notify(res.data.message || "⚠️ Login failed!", "error");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      notify(err.response?.data?.message || "❌ Invalid email or password", "error");
    }
  }

  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <form className="login-form" onSubmit={submit}>
          <Input Title="Email" Type="email" handleChange={handleEmail} />
          <Input Title="Password" Type="password" handleChange={handlePassword} />
          <Button Title="Login" Type="submit" />
          <li
            onClick={onSwitchToSignup}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Don't have an account? Sign up
          </li>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
