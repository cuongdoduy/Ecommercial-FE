import React from "react";
import Image from "next/image";

import likeImage from "public/like.svg";
import commentImage from "public/comment.svg";

interface ForumItemProps {
  authorImage: string;
  authorName: string;
  authorQuote: string;
  likeCount: number;
  commentCount: number;
  imagePost: string;
}

const ForumItem: React.FC<ForumItemProps> = ({
  authorImage,
  authorName,
  authorQuote,
  likeCount,
  commentCount,
  imagePost,
}) => {
  return (
    <div className="flex items-center bg-[white] justify-evenly rounded-[20px] border-[1px] border-[black] border-opacity-[0.1] shadow-sm px-[12px] py-[16px] mr-[2px] sm:mr-[40px] w-full">
      {/* <div className="items-center flex flex-col">
        <Image src={authorImage} alt="author" width={48} height={48}/>
        <div className="h-[40px] w-[1px] border-[1px] border-neutral_5 my-[4px]"></div>
      </div> */}
      <div className="w-[90%]">
        <p className="text-h5 font-semibold">{authorName}</p>
        <q className="text-body line-clamp-4">{authorQuote}</q>
        {/* <div className="flex items-center my-[4px]">
          <div className="flex items-center">
            <Image src={likeImage} alt="like" />
            <p className="text-h5">+{likeCount}</p>
          </div>
          <div className="flex items-center mx-[20px]">
            <Image src={commentImage} alt="comment" />
            <p className="text-h5">+{commentCount}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ForumItem;
