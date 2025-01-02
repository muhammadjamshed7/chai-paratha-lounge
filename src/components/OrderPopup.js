import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const OrderPopup = () => {
  return (
    <div className="fixed top-16 left-0 w-full overflow-hidden">
      <a href="tel:03029015909" className="block w-96 mx-auto bg-black p-4 rounded shadow-lg animate-slide-infinite flex items-center justify-center">
        <FaPhoneAlt className="text-yellow-500 mr-2" />
        <p className="text-yellow-500 text-xl font-bold text-center">
          To order, click here
        </p>
      </a>
    </div>
  );
};

export default OrderPopup;