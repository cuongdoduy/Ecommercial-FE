import React from "react";

const CallAction = () => {
  return (
    <div
      className="w-full relative"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 50%, #F0F0F0 50%)",
      }}
    >
      <div className="w-[80%] mx-auto rounded-[40px] bg-primary grid grid-cols-10 px-[24px] py-[12px] items-center">
        <h1 className="text-[32px] font-[700] text-white col-span-5">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="col-span-2"></div>
        <div className="col-span-3 py-[16px]">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full h-[48px] rounded-[40px] border-[1px] border-[white] bg-[white] text-[14px] text-[#333333] px-[16px]"
          />
          <button className="w-full h-[48px] rounded-[40px] bg-[white] text-primary text-[14px] font-[700] mt-[16px] hover:opacity-[0.8]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallAction;
