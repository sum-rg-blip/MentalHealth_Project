import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="">
      <Link to="/login">
      <button className="bg-green-600 text-white px-6 py-2 rounded">Log in</button></Link>
    </div>
  );
}
