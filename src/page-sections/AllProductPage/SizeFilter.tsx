import React from "react";

const SizeFilter = () => {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [userChoose, setUserChoose] = React.useState({
    size: "S",
  });
  return (
    <div className="flex w-full flex-wrap">
      <div className="grid grid-cols-3 gap-4">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() =>
              setUserChoose({
                ...userChoose,
                size: size,
              })
            }
            className={`py-[10px] px-[20px] rounded-[62px] cursor-pointer col-span-1 min-w-[60px] ${
              userChoose.size === size
                ? "text-white bg-[#000000]"
                : "bg-[#F0F0F0] text-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
