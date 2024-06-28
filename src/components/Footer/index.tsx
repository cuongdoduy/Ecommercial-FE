import React from "react";
import Logo from "public/logo.svg";
import Link from "next/link";
import Image from "next/image";

import { socialItems } from "@/constant";
import { footerItems } from "@/constant";
import CallAction from "./CallAction";

import ApplePay from "public/credits/apple_pay.svg";
import GooglePay from "public/credits/google_pay.svg";
import MasterCard from "public/credits/master.svg";
import Visa from "public/credits/visa.svg";
import Paypal from "public/credits/paypal.svg";

const Footer: React.FC = () => {
  const creditItems = [
    { name: "Apple Pay", icon: ApplePay },
    { name: "Google Pay", icon: GooglePay },
    { name: "Master Card", icon: MasterCard },
    { name: "Visa", icon: Visa },
    { name: "Paypal", icon: Paypal },
  ];
  return (
    <footer>
      <CallAction />
      <div className="sm:py-[40px] bg-[#F0F0F0]">
        <div className="w-[80%] mx-auto flex items-center justify-between">
          <div className="logo max-w-[200px]">
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
            <p className="text-body my-4">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex justify-start my-[8px] ml-[-8px]">
              {socialItems.map((social, index) => (
                <div key={index} className="social_logo_item">
                  <Link href={social.url} target="_blank" rel="noreferrer">
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="mx-[8px]"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {footerItems.map((group, index) => (
            <div key={index}>
              <p className="text-body font-[700] text-[#333333]">
                {group.groupTitle}
              </p>
              <ul>
                {group.items.map((item, index) => (
                  <li
                    key={index}
                    className="my-1 hover:text-primary hover:font-[700]"
                  >
                    <Link href={item.url} className="text-body">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F0F0F0] py-[8px] pb-[32px] ">
        <div className="text-center sm:flex justify-between items-center m-auto pt-[8px] text-white w-[80%] border-[1px] border-t-[black] border-opacity-[0.2]">
          <p className="text-footnote text-[#818181]">
            Shop.co &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center">
            {creditItems.map((credit, index) => (
              <Image
                key={index}
                src={credit.icon}
                alt={credit.name}
                width={50}
                height={50}
                className="mx-[8px] last:mr-0"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
