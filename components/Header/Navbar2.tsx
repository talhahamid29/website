    'use client'
    import React, { useState } from "react";

    const Navbar2: React.FC = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
        <div>
          <div className="bg-white font-nunito shadow-lg lg:space-x-48 p-4 pl-4 md:pl-20 flex">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 text-red-500 mt-[-10px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              <b className="text-xl ml-2">University</b>
            </div>

            <div className="hidden lg:flex lg:font-bold lg:flex-row lg:items-center lg:space-x-4 lg:mt-4">
              <li className="text-red-500 list-none">Home</li>
              <li className="list-none">Administration</li>
              <li className="list-none">Management</li>
              <li className="list-none">Students</li>
              <li className="list-none">Services</li>
              <li className="list-none">About</li>
              <li className="list-none">Contact</li>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 lg:hidden ml-[100px] mr-[40px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <div className=" cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 lg:ml-[-50px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
              <li className="text-red-500 list-none">Home</li>
              <li className="list-none">Administration</li>
              <li className="list-none">Management</li>
              <li className="list-none">Students</li>
              <li className="list-none">Services</li>
              <li className="list-none">About</li>
              <li className="list-none">Contact</li>
            </div>
          )}
        </div>
      );
    };

    export default Navbar2;
