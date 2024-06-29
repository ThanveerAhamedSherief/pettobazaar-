// Banner.jsx
// import React from 'react';
// import cat from '../../public/pets.jpg'

// const Banner = () => {
//   return (
//     <div className="relative h-[40rem]">
//       <img
//         src={cat} // Replace with your image URL
//         alt="Banner"
//         className="absolute inset-0 object-cover w-full h-full"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold">Welcome to PettoBazaar</h1>
//           <p className="mt-4 text-xl md:text-2xl">Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them</p>
//           <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";
// import Image1 from "../../assets/hero/women.png";
// import Image2 from "../../assets/hero/shopping.png";
// import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import Image1 from '/allpets.jpg';
import Image2 from '/womenDog.jpg';
import Image3 from '/humanCat.png';


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "The love for all living creatures is the most noble attribute of man",
    description:
      "If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.Animals are such agreeable friends – they ask no questions, they pass no criticisms",
  },
  {
    id: 2,
    img: Image2,
    title: "Reach Pet Lovers",
    description:
      "the premier platform designed to cater to all your pet needs.Browse listings from breeders, shelters, and private sellers to find your next furry family member, or list your own pets for adoption in a secure and supportive community. Discover a new way to connect with pets and pet lovers alike on PetTrade Hub.",
  },
  {
    id: 3,
    img: Image3,
    title: "Discover Your New Best Friend: Pet Sales and Adoptions",
    description:
      "From dogs and cats to birds, reptiles, and exotic pets, we offer a diverse selection of animals.",
  },
];

const Banner = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-indigo-700 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
