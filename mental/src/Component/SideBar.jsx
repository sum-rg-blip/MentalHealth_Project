import { Home, Calendar, MessageCircle, BookOpen, LogOutIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/dashboard", icon: Home },
  
  { path: "/messages", icon: MessageCircle },
  { path: "/resources", icon: BookOpen },
  { path: "/", icon: LogOutIcon },
];

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen bg-cyan-900 text-white w-30 flex flex-col items-center py-6 space-y-10 z-50">
      <img src="/mind.jpeg" className="w-10 h-10" alt="mind" />
      {navItems.map(({ path, icon: Icon }) => (
        <NavLink
          to={path}
          key={path}
          className={({ isActive }) =>
            `p-2 rounded hover:bg-gray-800 transition ${isActive ? "bg-gray-700" : ""}`
          }
        >
          <Icon className="w-5 h-5" />
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
