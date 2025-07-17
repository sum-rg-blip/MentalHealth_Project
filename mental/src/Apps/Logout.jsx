import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // clear session data
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminUser");

    // optional: show message for 1s then redirect
    const timer = setTimeout(() => {
      navigate("/admin");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-gray-700">Logging out...</p>
    </div>
  );
}

export default Logout;
