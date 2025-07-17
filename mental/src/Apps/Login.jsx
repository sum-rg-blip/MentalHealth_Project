import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdCall, MdSchedule, MdSecurity } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fadlan buuxi email iyo password sax ah");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.message === "Login successful") {
        localStorage.setItem("loggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Login failed. Fadlan hubi email iyo password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Fadlan hubi email iyo password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-green-700 text-white p-12 space-y-8">
          <h1 className="text-4xl font-extrabold">Welcome Back</h1>
          <p className="text-green-200 text-lg">
            Sign in to access your dashboard and continue your wellness journey.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdCall className="text-3xl" />
              <div>
                <h4 className="font-semibold">Support</h4>
                <p className="text-sm text-green-200">24/7 assistance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdSchedule className="text-3xl" />
              <div>
                <h4 className="font-semibold">Stay on Track</h4>
                <p className="text-sm text-green-200">Access anytime</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdSecurity className="text-3xl" />
              <div>
                <h4 className="font-semibold">Secure Login</h4>
                <p className="text-sm text-green-200">Your info is safe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Login Form */}
        <div className="md:w-1/2 p-8 md:p-12 relative">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-green-700 text-xl hover:underline transition absolute top-4 right-4"
          >
            ← Back to Home
          </button>

          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Login</h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />

            {/* Password with eye toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-12"
                required
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-700"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
