import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full lg:max-w-screen-xl mx-auto">
      <div className="lg:flex lg:gap-[40px] bg-gray-900 text-white font-nunito py-10">
        <div className="ml-[20px]  lg:mt-20 lg:mr-[10px] lg:ml-[100px]">
          <p className=" font-bold flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-red-500 lg:mt-[-10px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span className="mt-[10px]">University</span>
          </p>
          <p className="mt-10 text-gray-400 text-sm p-2 ">9876543210</p>
          <p className="text-sm p-2 text-gray-400">
            21 Jump street | California USA
          </p>
          <p className="text-sm p-2 text-gray-400"> www.eduma.com</p>
        </div>

        <div className="ml-[20px] lg:mr-[10px]  mt-20">
          <p className="font-bold">Security & Brand</p>
          <div className="mt-10 ">
            <p className="p-2 text-sm text-gray-400">Eduma </p>
            <p className="p-2 text-sm text-gray-400">Eduma Students</p>
            <p className="p-2 text-sm text-gray-400">Eduma Alumni</p>
            <p className="p-2 text-sm text-gray-400">Eduma</p>
          </div>
        </div>

        <div className="ml-[20px] lg:mr-[10px] mt-20">
          <p className="font-bold">Accounts</p>
          <div className="mt-10 ">
            <p className="p-2 text-sm text-gray-400"> CopyRight</p>
            <p className="p-2 text-sm text-gray-400">Accounts Students</p>
            <p className="p-2 text-sm text-gray-400">Accounts Alumni</p>
            <p className="p-2 text-sm text-gray-400">Accounts</p>
            <p className="p-2 text-sm text-gray-400">Accounts</p>
          </div>
        </div>
        <div className="ml-[10px]  mt-20">
          <p className="font-bold">Support</p>
          <div className="mt-10 ">
            <p className="p-2 text-sm text-gray-400"> CopyRight</p>
            <p className="p-2 text-sm text-gray-400">Support Students</p>
            <p className="p-2 text-sm text-gray-400">Support Alumni</p>
            <p className="p-2 text-sm text-gray-400">Support</p>
            <p className="p-2 text-sm text-gray-400">Support</p>
          </div>
        </div>
        <div className=" ml-[10px] lg:mr-[50px] mt-20">
          <p className="font-bold">School Directory</p>
          <div className="mt-10 ">
            <p className="p-2 text-sm text-gray-400"> CopyRight</p>
            <p className="p-2 text-sm text-gray-400">School Students</p>
            <p className="p-2 text-sm text-gray-400">School Alumni</p>
            <p className="p-2 text-sm text-gray-400">School</p>
            <p className="p-2 text-sm text-gray-400 mb-10">School</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 font-nunito">
        <hr className="text-gray-400 ml-10 mr-40 " />
        <div className="lg:flex mt-5">
          <p className=" text-sm text-gray-400 p-3 pl-10">
            Product Design By Oxcytech Systems 
          </p>
          <div className="flex text-sm ml-[50px] gap-4">
            <p className="text-gray-400 text-sm lg:pl-[560px] pt-2">Privacy</p>
            <p className="text-gray-400 text-sm pt-2">Terms</p>
            <p className="text-gray-400 text-sm pt-2">Support</p>
            <p className="text-gray-400 text-sm pt-2">About</p>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Footer;
