import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SearchIcon from "public/search_not_active.svg";
import SearchIconActive from "public/search_active.svg";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  // check if inputRef is focused

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener("focus", handleFocus);
      inputElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("focus", handleFocus);
        inputElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[577px]">
      <div className="w-full px-4 py-2 rounded-full bg-[#F0F0F0] flex">
        <Image
          src={isFocused ? SearchIconActive : SearchIcon}
          alt="search"
          width="0"
          height="0"
          className="w-full max-w-[24px] h-auto"
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for products..."
          className="w-full focus:outline-none bg-transparent mx-2"
        />
      </div>
    </div>
  );
};
export default Search;
