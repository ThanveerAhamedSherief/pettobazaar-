
import React from 'react';
import petBazaarImage from '../assets/newLogo.jpeg'; // Replace with your actual image path

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  {/* Hero Section */}
  <section className="mb-8">
    <div className="flex flex-col items-center">
      <img src={petBazaarImage} alt="PettoBazaar" className="rounded-lg shadow-lg mb-4 max-w-full h-[300px]" />
      <p className="text-lg text-center text-black font-bold mb-6">
        The Ultimate Destination for Pets, Pet Lovers, and Pet Care Services
      </p>
      <p className="text-lg text-center text-gray-700 mb-6">
        Welcome to PettoBazaar, where pet lovers come together! Whether you're adopting, buying, selling, or looking for reliable pet services, PettoBazaar makes it easy, secure, and enjoyable.
      </p>
    </div>
  </section>

  {/* Buy and Sell Pets Section */}
  <section className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Buy and Sell Pets</h2>
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
      <div>
        <p className="text-lg text-gray-700 mb-4">
          Finding the right pet is a journey, and at PettoBazaar, we make that process seamless and enjoyable. Connect with trustworthy breeders and pet sellers in your area, and explore a variety of pets that fit your lifestyle.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Diverse Selection of Pets:</strong> From playful puppies and kittens to exotic reptiles, birds, and even small mammals, our platform has it all.</li>
          <li><strong>Verified and Trusted Sellers:</strong> Every seller on PettoBazaar goes through a thorough verification process to ensure the health and wellbeing of their pets.</li>
          <li><strong>Detailed Pet Listings:</strong> Get to know your potential new companion with detailed descriptions, photos, and essential information like vaccination records and temperament.</li>
          <li><strong>Safe and Secure Transactions:</strong> Our encrypted payment gateway ensures secure transactions for both buyers and sellers, offering peace of mind throughout the buying process.</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Pet Services Marketplace Section */}
  <section className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Pet Services Marketplace</h2>
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-8">
      <div>
        <p className="text-lg text-gray-700 mb-4">
          PettoBazaar is more than just a marketplace for buying pets. It's a complete resource for pet owners, offering a wide range of pet services to ensure your furry, feathered, or scaly friends live their best lives.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Veterinary Care:</strong> Connect with top-rated vets for routine checkups, vaccinations, and specialized treatments to keep your pets healthy.</li>
          <li><strong>Professional Grooming:</strong> Find experienced groomers who provide services from basic baths to full makeovers for all types of pets, ensuring they look and feel their best.</li>
          <li><strong>Pet Training and Behavior:</strong> Access expert trainers who can help with everything from obedience training to resolving behavioral issues.</li>
          <li><strong>Pet Boarding and Daycare:</strong> Find trusted pet boarding facilities for those times when you need to travel or work long hours, ensuring your pet gets the best care while you're away.</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Why Choose PettoBazaar Section */}
  <section className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PettoBazaar?</h2>
    <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
      <li><strong>Seamless User Experience:</strong> Our intuitive website and mobile app are designed with you in mind—easy to navigate, accessible, and user-friendly.</li>
      <li><strong>Community of Pet Lovers:</strong> Connect with other pet owners, share experiences, and exchange valuable pet care tips in our vibrant and supportive community.</li>
      <li><strong>Verified Pet Professionals:</strong> All service providers, including vets, groomers, and trainers, are carefully vetted to ensure you only get the highest-quality services for your pets.</li>
      <li><strong>24/7 Customer Support:</strong> Our friendly support team is always ready to help with any issues or questions, available whenever you need assistance.</li>
    </ul>
  </section>

  {/* Call to Action Section */}
  <section className="text-center">
    <p className="text-lg text-gray-700 mb-4">
      Join the PettoBazaar family today and give your pet the care, love, and attention they deserve! Explore our wide selection of pets, services, and expert advice—all in one place.
    </p>
    <p className="text-lg text-gray-700 mb-4">
      Download our app or visit our website to get started. The journey to finding your perfect pet begins here!
    </p>
    <p className="text-lg text-gray-700">
      Welcome to PettoBazaar — where pets find homes, and owners find happiness.
    </p>
  </section>
</div>

    </div>
  );
};

export default AboutPage;

