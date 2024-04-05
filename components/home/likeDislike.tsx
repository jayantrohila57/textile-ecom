"use client";

import { Heart } from "lucide-react";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function LikeDislike() {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };
  return (
    <div className="absolute top-2 right-2 w-8 h-8 p-1 flex items-center justify-center rounded-full  bg-white/30">
      {liked ? (
        <FaHeart
          className="w-full h-full cursor-pointer text-[#DC2626]"
          onClick={handleLikeToggle}
        />
      ) : (
        <Heart
          className="w-full h-full cursor-pointer"
          onClick={handleLikeToggle}
        />
      )}
    </div>
  );
}

export default LikeDislike;
