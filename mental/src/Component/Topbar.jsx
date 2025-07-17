import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";

function Topbar() {
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    const adminData = JSON.parse(sessionStorage.getItem("adminUser"));
    if (adminData?.email) {
      setAdminEmail(adminData.email);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow-md px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-800">MindCare</h1>

      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full max-w-sm mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-gray-700 w-full"
        />
        <BiSearch />
      </div>

      <div className="flex items-center space-x-2">
        <img
          src="/img/smiling-young-beautiful-girl-pointing-right-side-with-copy-space_141793-92529.avif"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-blue-500"
        />
        <span className="text-gray-800 font-medium">{adminEmail || "Admin"}</span>
      </div>
    </header>
  );
}

export default Topbar;