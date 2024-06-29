import React from "react";
import BannerImg from "/post.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const Post = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
           <span className="text-indigo-700">PettoBazaar</span> : Discover, Buy, and Sell Your Perfect Companion!
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p> */}
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Wide Selection</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <VscWorkspaceTrusted className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Trusted Sellers</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <MdOutlineHealthAndSafety className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Health & Care</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <CgCommunity className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Community Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
