/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// SimpleSlider.js
import React from 'react';
import Slider from 'react-slick';

// CustomArrows.js
export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={`${className} py-10`} style={{ ...style, display: 'block', right: 10 }} onClick={onClick} />;
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={`${className} py-10`} style={{ ...style, display: 'block', left: 10, zIndex: 1 }} onClick={onClick} />;
};

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
    <div>
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
    </div>
  );
};

export default SimpleSlider;
