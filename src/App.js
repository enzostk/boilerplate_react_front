import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/navigation";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/password" element={<ForgotPassword />} />
          <Route path="/users/:token" element={<ResetPassword />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
