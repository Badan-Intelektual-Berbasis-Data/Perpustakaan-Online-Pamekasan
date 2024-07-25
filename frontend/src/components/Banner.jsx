// SimpleSlider.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      <div className="bg-gray-500 text-white py-40 h-[400px]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Buku Teknologi</h2>
          <p className="text-lg mb-4">Temukan buku favorit Anda dan banyak lagi</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
        </div>
      </div>
      <div className="bg-green-600 text-white py-40 h-[400px]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Buku Ekonomi</h2>
          <p>Temukan buku favorit Anda dan banyak lagi</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
        </div>
      </div>
      <div className="bg-blue-700 text-white py-40 h-[400px]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">Buku Fiksi</h2>
          <p>Temukan buku favorit Anda dan banyak lagi</p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
        </div>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
