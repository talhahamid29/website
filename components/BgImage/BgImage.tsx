import React from "react";
import Img from '../../public/img1.jpg' 

const BgImage: React.FC = () => {
  return (
    <div>
      <div className="font-nunito" style={{ position: "relative" }}>
        <img
          src={Img.src}
          className="h-[470px] w-[1300px] z-[-100] blur-sm"
          alt="Description"
        />
        <div className="pl-[400px] ">
          <p className="ml-20 font-bold lg:w-[600px] text-lg ml-[00px] lg:ml-[20px] lg:text-3xl text-white absolute align-center top-1/2 lg:left-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Eduma Is More Than Just A Place To
            <span className="lg:ml-[100px] "> Get An Education.</span>
          </p>
          <button className="absolute bg-red-600 text-sm text-white p-2 lg:p-2 lg:pr-4  lg:pl-4 rounded align-center top-[320px] left-[170px] lg:left-[600px] transform -translate-x-1/2 -translate-y-1/2">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgImage;
