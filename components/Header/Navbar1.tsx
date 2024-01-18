import React from "react";

const Navbar1: React.FC = () => {
  return (
    <div className="bg-white font-nunito shadow-lg ml-[-70px] lg:m-0 lg:pl-10 lg:p-4 lg:pl-4 flex flex-col  md:flex-row justify-between items-center border-b-2 text-sm">
      <ul className="flex space-x-3 lg:space-x-4 mb-2 md:mb-0 ml-[70px] lg:ml-[60px]">
        <li>University</li>
        <li>Student</li>
        <li>Faculty</li>
        <li>Alumni</li>
        <li>Community</li>
      </ul>
      <ul className="flex space-x-4 ml-[60px] lg:mr-[60px]">
        <li>Login</li>
        <li>Signup</li>
        <li>Signout</li>
      </ul>
    </div>
  );
};

export default Navbar1;
