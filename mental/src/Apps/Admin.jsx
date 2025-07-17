import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCall, MdSchedule, MdSecurity } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in your email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem("adminLoggedIn", "true");
        sessionStorage.setItem("adminUser", JSON.stringify(data.admin));
        navigate("/dashboard-admin");
      } else if (data.error) {
        setError(data.error);
      } else {
        setError("Login failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left panel */}
        <div className="md:w-1/2 bg-green-700 text-white p-12 space-y-8">
          <h1 className="text-4xl font-extrabold">Admin Panel Access</h1>
          <p className="text-green-200 text-lg">
            Manage the platform securely and efficiently. Please log in to access admin tools.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdCall className="text-3xl" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-green-200">We're here for you</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdSchedule className="text-3xl" />
              <div>
                <h4 className="font-semibold">Efficient Management</h4>
                <p className="text-sm text-green-200">Save your time</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-green-600 p-4 rounded-xl shadow-md w-64">
              <MdSecurity className="text-3xl" />
              <div>
                <h4 className="font-semibold">Secure Access</h4>
                <p className="text-sm text-green-200">Only authorized admins</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: Admin Login */}
        <div className="md:w-1/2 p-8 md:p-12 relative">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 text-green-700 hover:underline transition absolute top-4 right-4"
          >
            ← Back to Home
          </button>

          <form className="space-y-6 mt-12" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Admin Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password with Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              Login
            </button>

            {error && (
              <p className="mt-4 text-red-600 font-semibold text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
