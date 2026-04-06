import React, { useState } from "react";
import "./Minor Components/Input.css";
import Input from "./Minor Components/Input";
import Button from "./Minor Components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Signup({ onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmail(userEmail) {
    setEmail(userEmail);
  }
  function handleName(user) {
    setName(user);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  function notify(message, type = "info") {
    if (type === "success") toast.success(message);
    else if (type === "error") toast.error(message);
    else toast(message);
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        notify("✅ Signup successful! You can now log in.", "success");
        onSwitchToLogin(); // switch to login page
      } else {
        notify(res.data.message || "⚠️ Signup failed!", "error");
      }
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      notify(
        err.response?.data?.message || "❌ Something went wrong. Try again.",
        "error"
      );
    }
  }

  return (
    <div className="login-layout-cont">
      <div className="Login-container">
        <form className="login-form" onSubmit={submit}>
          <Input Title="name" Type="text" handleChange={handleName} />
          <Input Title="Email" Type="text" handleChange={handleEmail} />
          <Input Title="Password" Type="password" handleChange={handlePassword} />
          <Button Title="Signup" Type="submit" />
          <li
            onClick={onSwitchToLogin}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            Already have an account? Please login
          </li>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Signup;

