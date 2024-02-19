'use client'

import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {

  const router = useRouter();

  const HandleRoute = () => {
    router.push("/");
  }


  return (
    <header className="my-5 flex flex-col gap-7 justify-between items-center md:flex-row">
      <h1 onClick={HandleRoute} className="border-4 border-yellow-700 p-3 rounded-s-3xl rounded-e-3xl text-yellow-700 font-bold text-2xl cursor-pointer">Take_Note.</h1>

      <p>
        &copy; {new Date().getFullYear()} <span className="text-pink-700 font-bold">Shariful Porag</span>. All Rights Reserved.
      </p>

      <button on className="bg-transparent border-4 mr-4 border-pink-400 px-4 py-2 rounded-xl">Show All Blog</button>
    </header>
  );
};

export default Header;
