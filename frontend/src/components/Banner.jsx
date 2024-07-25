// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import gedung from '../assets/gedung.jpg'


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

export default SimpleSlider;
