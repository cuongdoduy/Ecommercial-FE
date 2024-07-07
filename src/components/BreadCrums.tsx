import Link from "next/link";
import React from "react";

interface BreadCrumsProps {
  items: Array<{ name: string; href: string }>;
}

const BreadCrums: React.FC<BreadCrumsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="block w-full">
      <ol className="flex flex-wrap items-center w-full pr-4 py-2 rounded-md">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-primary hover:font-bold"
          >
            <Link href={item.href} className="text-[16px]">
              {item.name}
            </Link>
            {index != items.length - 1 && (
              <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrums;
