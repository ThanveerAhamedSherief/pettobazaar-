// import React from 'react'

// export default function About() {
//   return (
//       <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                   <div className="md:5/12 lg:w-5/12">
//                       <img
//                           src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//                           alt="image"
//                       />
//                   </div>
//                   <div className="md:7/12 lg:w-6/12">
//                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                           React development is carried out by passionate developers
//                       </h2>
//                       <p className="mt-6 text-gray-600">
//                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                           accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                           aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                       </p>
//                       <p className="mt-4 text-gray-600">
//                           Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                           Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white shadow-md rounded-lg p-8 mb-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
//         <p className="text-gray-700 text-lg mb-4 text-center">
//         PettoBazaar: Your One-Stop Destination for Pets and Pet Services
//         </p>
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
//             <img
//               src="https://via.placeholder.com/600x400"
//               alt="Company Overview"
//               className="rounded-lg shadow-md w-full"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-700 text-lg mb-4">
//             Welcome to PettoBazaar, the premier platform designed to cater to all your pet needs. Whether you're looking to buy or sell pets, find mating partners for your furry friends, or access a range of pet services, PettoBazaar is here to make your experience smooth, secure, and enjoyable.
//             </p>
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Buy and Sell Pets</h2>

//             <p>
// At PettoBazaar, we understand that finding the perfect pet can be a life-changing experience. Our platform connects pet lovers with reputable breeders and sellers, ensuring that every transaction is transparent and trustworthy.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="bg-white shadow-md rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
//         <div className="flex flex-wrap -mx-4">
//           {teamMembers.map((member) => (
//             <div key={member.name} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//               <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
//                 <p className="text-gray-600">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const teamMembers = [
//   {
//     name: 'Alice Johnson',
//     role: 'CEO',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Bob Smith',
//     role: 'CTO',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     name: 'Charlie Brown',
//     role: 'Lead Developer',
//     image: 'https://via.placeholder.com/150',
//   },
//   // Add more team members as needed
// ];

// export default AboutPage;
import React from 'react';
import petBazaarImage from '/logo.png'; // Replace with your actual image path

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex flex-col items-center">
            <img src={petBazaarImage} alt="PettoBazaar" className="rounded-lg shadow-lg mb-4 max-w-full h-auto" />
            {/* <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">PettoBazaar</h1> */}
            <p className="text-lg text-center text-black font-bold mb-6">
              Your One-Stop Destination for Pets and Pet Services
            </p>
            <p className="text-lg text-center text-gray-700 mb-6">
              Welcome to PettoBazaar, the premier platform designed to cater to all your pet needs.
              Whether you're looking to buy or sell pets, find mating partners for your furry friends,
              or access a range of pet services, PettoBazaar is here to make your experience smooth,
              secure, and enjoyable.
            </p>
          </div>
        </section>

        {/* Buy and Sell Pets Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Buy and Sell Pets</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
            {/* <div className="md:w-1/2">
              <img src="/path/to/buy-sell-pets-image.jpg" alt="Buy and Sell Pets" className="rounded-lg shadow-lg mb-4 max-w-full h-auto" />
            </div> */}
            {/* <div className="md:w-1/2"> */}
            <div>
              <p className="text-lg text-gray-700 mb-4">
                At PettoBazaar, we understand that finding the perfect pet can be a life-changing experience.
                Our platform connects pet lovers with reputable breeders and sellers, ensuring that every
                transaction is transparent and trustworthy.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li><strong>Wide Variety of Pets:</strong> From dogs and cats to birds, reptiles, and exotic pets, we offer a diverse selection of animals.</li>
                <li><strong>Verified Sellers:</strong> All sellers on our platform go through a rigorous verification process to ensure they meet our high standards.</li>
                <li><strong>Detailed Listings:</strong> Each pet listing includes comprehensive information, high-quality photos, and the pet's health and vaccination records.</li>
                <li><strong>Secure Transactions:</strong> Our secure payment system protects both buyers and sellers, providing peace of mind for every transaction.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mating Services Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mating Services</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
            {/* <div className="md:w-1/2">
              <img src="/path/to/mating-services-image.jpg" alt="Mating Services" className="rounded-lg shadow-lg mb-4 max-w-full h-auto" />
            </div>
            <div className="md:w-1/2"> */}
            <div >
              <p className="text-lg text-gray-700 mb-4">
                Finding the right mating partner for your pet is crucial for their health and happiness.
                PettoBazaar offers a dedicated mating service to help you find the perfect match for your
                beloved pet.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li><strong>Matchmaking Algorithm:</strong> Our advanced algorithm considers breed, health, and compatibility to suggest the best potential mates.</li>
                <li><strong>Health Screening:</strong> All mating partners undergo health checks to ensure they are fit and healthy.</li>
                <li><strong>Community Reviews:</strong> Read reviews from other pet owners to make informed decisions.</li>
                <li><strong>Support Services:</strong> Our team of experts is available to provide advice and support throughout the mating process.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pet Services Marketplace Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pet Services Marketplace</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
            {/* <div className="md:w-1/2">
              <img src="/path/to/pet-services-image.jpg" alt="Pet Services Marketplace" className="rounded-lg shadow-lg mb-4 max-w-full h-auto" />
            </div> */}
            {/* <div className="md:w-1/2"> */}
            <div>
              <p className="text-lg text-gray-700 mb-4">
                PettoBazaar is more than just a marketplace for buying and selling pets; its a comprehensive
                resource for all your pet care needs.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li><strong>Veterinary Services:</strong> Find and book appointments with trusted veterinarians in your area.</li>
                <li><strong>Grooming Services:</strong> Discover professional pet grooming services to keep your pet looking their best.</li>
                <li><strong>Training and Behavior:</strong> Connect with experienced pet trainers to help your pet learn and grow.</li>
                <li><strong>Pet Boarding:</strong> Locate reliable pet boarding facilities for when you’re away.</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Why Choose PettoBazaar Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PettoBazaar?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li><strong>User-Friendly Interface:</strong> Our app and website are designed to be intuitive and easy to navigate, ensuring a seamless experience for users of all ages.</li>
            <li><strong>Community Focused:</strong> Join a community of pet enthusiasts. Share your experiences, seek advice, and connect with other pet lovers.</li>
            <li><strong>Trusted and Reliable:</strong> Our commitment to quality and security ensures that every interaction on PettoBazaar is safe and trustworthy.</li>
            <li><strong>24/7 Customer Support:</strong> Our dedicated customer support team is available around the clock to assist with any queries or concerns.</li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Join PettoBazaar today and explore a world of possibilities for you and your pet.
            Whether you're looking to find a new furry friend, the perfect mate for your pet,
            or access a variety of pet services, PettoBazaar is here to help.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Download our app or visit our website now to get started.
          </p>
          <p className="text-lg text-gray-700">
            Welcome to PettoBazaar - where pets find their homes, mates, and everything they need to thrive!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
