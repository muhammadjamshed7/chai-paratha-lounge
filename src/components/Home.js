import React from 'react';
import MenuCard from './MenuCard';

const menuItems = [
  { title: 'Sada Paratha', price: '60 PKR', image: 'https://i.pinimg.com/736x/a9/9a/9c/a99a9cbc6d3b49b81e79d1eaa561cf9b.jpg' },
  { title: 'Simple Saag Paratha', price: '80 PKR', image: 'https://i.pinimg.com/736x/e5/9f/53/e59f532ab087e3dda8fccf2dfd758e40.jpg' },
  { title: 'Aloo Paratha', price: '120 PKR', image: 'https://i.pinimg.com/736x/12/56/37/125637335754342fa5addfd6a101002f.jpg' },
  { title: 'Muli Paratha', price: '150 PKR', image: 'https://i.pinimg.com/736x/d1/64/79/d16479aee97489cb6a0aa1769361fbf8.jpg' },
  { title: 'Saag Filling', price: '140 PKR', image: 'https://i.pinimg.com/736x/75/8a/54/758a540dd21abd8cc4e1af07b8ba6f42.jpg' },
  { title: 'Saag & Makhan Paratha', price: '180 PKR', image: 'https://i.pinimg.com/736x/75/d9/60/75d96096fdc9b33a4f0f32a926a8b165.jpg' },
  { title: 'Chicken Paratha', price: '280 PKR', image: 'https://i.pinimg.com/736x/00/90/89/00908919bd0ace1c91a68239e4eb1b61.jpg' },
  { title: 'Malai Paratha', price: '200 PKR', image: 'https://i.pinimg.com/736x/fd/7b/9e/fd7b9eaff90e6a6669413c9bbece02bb.jpg' },
  { title: 'Shakar Paratha', price: '120 PKR', image: 'https://i.pinimg.com/736x/9d/bc/9c/9dbc9caba478f060d39746a99eb9352d.jpg' },
  { title: 'Chini Paratha', price: '120 PKR', image: 'https://i.pinimg.com/736x/b3/17/72/b317724d7fe54dddba7f354aa8078c8b.jpg' },
  { title: 'Half Fry', price: '60 PKR', image: 'https://i.pinimg.com/736x/c7/a9/7e/c7a97ed702ee6941bc3528f62a910bdb.jpg' },
  { title: 'Full Fry', price: '60 PKR', image: 'https://i.pinimg.com/736x/e1/3d/69/e13d691d00762d9f14c1f582fc34cf4b.jpg' },
  { title: 'Omelette', price: '80 PKR', image: 'https://i.pinimg.com/736x/ff/35/6b/ff356b9e5b5d298136f4fc1058ae6f73.jpg' },

];

const Home = () => {
  return (
    <div className="container mx-auto p-4 mt-16">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <MenuCard key={index} title={item.title} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Home;