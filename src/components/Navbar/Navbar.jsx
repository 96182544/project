import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import logo from "/public/images/logo.png";

const Navbar = () => {
  return (
    <div className=" w-full ">
      <div>
        <div className="flex flex-row justify-between p-5 h-28 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer  mb-3">
            <Image src={logo} alt="logo" width={250} height={200} />
          </div>
          <div className="mt-5">
          <Button title="SE CONNECTER" />
          </div>
    
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
