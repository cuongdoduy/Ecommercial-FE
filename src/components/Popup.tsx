import React, { useEffect } from "react";
import CloseIcon from "public/close-square.svg";
import Image from "next/image";
import Workshop01 from "public/Workshop01.jpg";
import Link from "next/link";

export function PopupSection7() {
  const [showPopup, setShowPopup] = React.useState(false);

  const workshopURL =
    "https://ielts-powerup.com/khoa-hoc-ielts-mien-phi/workshop-ielts-writing-2/";

  useEffect(() => {
    // Check if user has seen the popup
    const seenPopup = sessionStorage.getItem("seenPopup");
    if (seenPopup) {
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }, []);

  const handleClickOutSide = () => {
    setShowPopup(false);
    sessionStorage.setItem("seenPopup", "true");
  };

  return (
    showPopup && (
      <div className="fixed top-0 bottom-0 right-0 left-0 z-[90]">
        <div
          className="h-full w-full bg-white opacity-[0.4] z-[89]"
          onClick={() => handleClickOutSide()}
        ></div>
        <div
          className="grid h-screen place-items-center z-[25] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
          onClick={() => {
            handleClickOutSide();
          }}
        >
          <div
            className="max-w-2xl relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="absolute top-0 left-0">
              <div
                className="!max-w-[48px] !max-h-[48px] !w-[48px] !h-[48px] !p-[2px] hover:bg-gray-900/10 hover:rounded-lg cursor-pointer active:bg-gray=900/20"
                onClick={() => handleClickOutSide()}
              >
                <Image
                  src={CloseIcon}
                  alt="close"
                  className="w-[48px] h-[48px]"
                />
              </div>
            </div>
            <Link
              href={workshopURL}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <Image
                src={Workshop01}
                width={1920}
                height={1080}
                alt="Workshop Image"
                loading="lazy"
                className="w-full h-full rounded-lg "
              />
            </Link>
          </div>
          {/*  */}
        </div>
      </div>
    )
  );
}

export default PopupSection7;
