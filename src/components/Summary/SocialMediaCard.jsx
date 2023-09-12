import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";

const SocialMediaCard = ({ socialIcon, count, countType }) => {
  return (
    <div
      social-media-card
      className="shadow-md m-1 h-36 bg-white w-40 p-[6px] rounded-lg"
    >
      <div className="hover:bg-gray-100 transition-all cursor-pointer rounded-lg px-4 py-3">
        <div className="icons">
          <AiOutlineTwitter className="text-[42px] text-blue-500 mb-1" />
        </div>
        <div className="count-stats text-[28px] font-semibold">250k</div>
        <div className="followers text-xs text-gray-400 font-semibold">
          followers
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
