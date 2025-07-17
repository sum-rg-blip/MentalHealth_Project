import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">Ku Soo Dhawoow Nafis Therapy</h1>
      <p className="mb-6 text-gray-700">Adeegyada nafsiyan lagu daweeyo ee online ah</p>
      <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded shadow">
        Soo gal si aad u bilowdo
      </Link>
    </div>
  );
}
export default Home;