import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 bg-yellow-100">
      <h1 className="text-3xl font-bold text-black mb-4 text-center">About Chai Paratha Lounge</h1>
      <p className="text-lg text-black mb-2">
        Welcome to Chai Paratha Lounge, where we serve delicious parathas and a variety of tea options 24/7.
        Our commitment is to provide you with the best quality food and service.
      </p>
      <p className="text-lg text-black mb-2">
        If any material is found faulty, it will be replaced free of cost.
      </p>
      <h2 className="text-2xl font-semibold text-black mt-4">Special Offer</h2>
      <p className="text-lg text-black mb-2">
        We also offer homemade buttered Saag, freshly prepared from the village.
      </p>
      <h2 className="text-2xl font-semibold text-black mt-4">Upcoming Specials</h2>
      <p className="text-lg text-black mb-2">
        Tandoor Food and Homemade Meals will soon be available. You can pre-order these items with us.
      </p>
    </div>
  );
};

export default About;