import React, { useState } from "react";
import LoginPage from "../Components/LoginPage";
import Signup from "../Components/Signup";

function AccessPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? (
        <LoginPage onSwitchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup onSwitchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default AccessPage;
