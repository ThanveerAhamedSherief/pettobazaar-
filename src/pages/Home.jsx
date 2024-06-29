import React from 'react';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Post from '../components/Post';
import Subscribe from '../components/Subscribe';
import Post1 from '../components/Post1';

const HomePage = () => {
  return (
    // <div className="container mx-auto mt-10 text-center px-4">
    //   {/* <h1 className="text-4xl font-bold mb-4">Welcome to Pets Paradise</h1>
    //   <p className="text-lg mb-6">Your one-stop destination for all things pets!</p>
    //   <img src="https://via.placeholder.com/600x300" alt="Pets" className="mx-auto w-full max-w-lg" /> */}
    //   <Banner/>
    // </div>
    <div>
    <div className='bg-white'>
        <Banner/>
    </div>
    {/* <div className='grid grid-cols-2'>
    <div className='bg-yellow-400'>H1</div> */}
    {/* <div className='bg-pink-400'>
        <div className='grid grid-cols-2'>
            <div className='bg-green-400'>KK</div>
            <div className='bg-black'>KK</div>
            <div className='bg-indigo-400'>KK</div>
            <div className='bg-blue-400'>KK</div>
        </div>
    </div>
    </div> */}
    <Post/>
    <Subscribe/>
    <Post1/>
    <Testimonials/>

    </div>
  );
};

export default HomePage;