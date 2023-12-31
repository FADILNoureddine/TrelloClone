'use client'
import Image from "next/image";
import React from "react";
import innovDs from "@/public/image/innovDs.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar"
import { useBoardStore } from "@/store/BoardStore";
function Header() {
  const [ searchString, setSearchString ] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ])

  return (
    <header>
      <div 
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-gray-700/10 to-[#1e87c8] rounded-md filter
                   blur-3xl opacity-50 -z-50"
      />
      <div className="flex flex-col md:flex-row items-center px-5 pb-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src={innovDs}
          alt="innovDs"
          width={300}
          height={100}
          className="w-36 pb-10 md:pb-0 object-contain mix-blend-color-burn"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* seach Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-200" />
            <input
              type="text"
              placeholder="Seach"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Icon */}

          {/* Avatar */}
          <Avatar name="noureddine Fadil" round size="60"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
