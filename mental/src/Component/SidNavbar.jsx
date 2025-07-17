import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiCalendar } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { CgMail, CgLogOut } from "react-icons/cg";

function SidNavbar() {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard-admin", label: "Dashboard", icon: <FiGrid /> },
    { to: "/Appointments", label: "Appointments", icon: <FiCalendar /> },
    { to: "/Patients", label: "Patients", icon: <AiOutlineTeam /> },
    { to: "/Message", label: "Message", icon: <CgMail /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-cyan-100 shadow-xl text-black text-2xl p-6 flex flex-col justify-between z-50 border-r border-gray-200">
      {/* Navigation Items */}
      <div className="space-y-4">
        {navItems.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-4 text-base font-medium px-4 py-3 rounded-lg transition duration-200 ${
              isActive(to)
                ? "bg-gradient-to-r from-cyan-400 to-blue-400 text-white shadow-md"
                : "hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            <span className="text-xl text-[#6975C5]">{icon}</span>
            {label}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div>
        <Link
          to="/Logout"
          className={`flex items-center gap-4 text-base font-medium px-4 py-3 rounded-lg transition duration-200 ${
            isActive("/Logout")
              ? "bg-red-500 text-white shadow"
              : "hover:bg-red-100 hover:text-red-600"
          }`}
        >
          <span className="text-xl text-[#6975C5]"><CgLogOut /></span>
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default SidNavbar;
