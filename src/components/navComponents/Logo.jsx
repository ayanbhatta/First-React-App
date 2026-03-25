import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 cursor-pointer">
      <FaGraduationCap className="text-3xl" />
      <span>EduStore</span>
    </div>
  );
}

export default Logo
