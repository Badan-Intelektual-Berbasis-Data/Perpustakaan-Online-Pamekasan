// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import perpusImage1 from '../assets/Perpus.jpg';
import perpusImage2 from '../assets/Perpus.jpg';
import perpusImage3 from '../assets/Perpus.jpg';

const Banner = () => {
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
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${perpusImage1})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center p-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Buku Teknologi</h2>
              <p className="text-lg mb-4">Temukan buku favorit Anda dan banyak lagi</p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${perpusImage2})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center p-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Buku Ekonomi</h2>
              <p className="text-lg mb-4">Temukan buku favorit Anda dan banyak lagi</p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${perpusImage3})` }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center p-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Buku Fiksi</h2>
              <p className="text-lg mb-4">Temukan buku favorit Anda dan banyak lagi</p>
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Jelajahi Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
