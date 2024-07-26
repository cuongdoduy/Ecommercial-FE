import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { navItems } from "@/constant";
import Logo from "public/logo.svg";
import Avatar from "public/avatar.svg";
import Cart from "public/cart.svg";
import Search from "./Search";
import { CartContext } from "@/contexts/CartContext";
import ProfileMenu from "../AvatarList";
import Button from "../Button";
import { signIn, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [totalItems, setTotalItems] = React.useState(0);

  const { cartItems } = useContext(CartContext) || {};
  const cartItemsLength = cartItems?.length;

  const { data: session } = useSession();

  useEffect(() => {
    setTotalItems(cartItemsLength || 0);
  }, [cartItemsLength]);

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
        <Link href="/cart" className="text-h5 relative">
          <Image
            src={Cart}
            alt="cart"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[24px] h-[24px]"
          />
          <span className="rounded-[999px] px-2 bg-[#ff0000] absolute top-[-10px] min-w-[20px] h-[20px ] left-[16px] text-[11px]">
            {totalItems}
          </span>
        </Link>
        {session?.user ? (
          <>
            {/* <Image
              src={Avatar}
              alt="avatar"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[24px] h-[24px]"
            /> */}
            <ProfileMenu />
          </>
        ) : (
          <div onClick={() => signIn()}>
            <Button title="Login" className="!px-[24px] !py-[12px]" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
