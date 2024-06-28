import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/constant";
import Logo from "public/logo.svg";
import Avatar from "public/avatar.svg";
import Cart from "public/cart.svg";
import Search from "./Search";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    setIsLogin(true);
  }, []);

  return (
    <nav className="p-5 w-[95%] mx-auto">
      <div className="flex items-center justify-around hidden md:flex">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-body hover:font-[700]"
          >
            {item.name}
          </Link>
        ))}
        <Search />
        <Link href="/cart" className="text-h5">
          <Image
            src={Cart}
            alt="cart"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[24px] h-[24px]"
          />
        </Link>
        {isLogin ? (
          <Link href="/trang-ca-nhan" className="text-h5 mx-5">
            <Image
              src={Avatar}
              alt="avatar"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[24px] h-[24px]"
            />
          </Link>
        ) : (
          <Link href="/login" className="text-h5 mx-5">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
