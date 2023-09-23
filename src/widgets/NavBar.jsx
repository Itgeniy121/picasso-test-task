import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className='bg-[#5CB3FF] h-[65px] w-full flex flex-row justify-start items-center px-[30px]'>
      <Link to='/' className='hover:underline w-full text-white text-[18px]'>
        На главную
      </Link>
    </div>
  );
};

export default NavBar;
