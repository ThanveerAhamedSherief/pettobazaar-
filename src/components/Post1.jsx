import React from 'react';
import BannerImg from "../assets/mobileimage.jpg";


const Post1 = () => {
  return (
    <div className='container py-12 sm:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div>
                <h2 className='font-bold text-5xl'>The Best Way to sell and buy pets online</h2>
                <p className='py-8'>
                Download Pettobazaar now and discover a new way to buy and sell pets conveniently from your mobile device. Whether you’re looking for a playful puppy, a majestic cat, or a colorful aquarium fish, Pettobazaar has something for every pet lover.
                </p>
            </div>
            <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
        </div>
    </div>
  )
}

export default Post1