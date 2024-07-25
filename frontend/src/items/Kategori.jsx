/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faBook, faHistory, faChild, faBrain, faUser, faFlask, faPenFancy, faCogs } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

export default function Kategori() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const categories = [
    { icon: faBook, label: 'Fiksi' },
    { icon: faHistory, label: 'Sejarah' },
    { icon: faChild, label: 'Anak-Anak' },
    { icon: faBrain, label: 'Sains' },
    { icon: faUser, label: 'Biografi' },
    { icon: faFlask, label: 'Teknologi' },
    { icon: faPenFancy, label: 'Sastra' },
    { icon: faCogs, label: 'Non-Fiksi' },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 lg:px-80 relative">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Pilih Kategori Yang Menarik Bagi Anda</h3>
        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {categories.map((category, index) => (
              <div key={index} className="flex justify-center">
                <div className="bg-white px-2 py-1 rounded-lg shadow-md flex items-center space-x-2" style={{ width: '140px', marginLeft: 25 }}>
                  <FontAwesomeIcon icon={category.icon} className="h-5 w-5 text-gray-600" />
                  <h4 className="text-sm font-semibold mb-1 text-center">{category.label}</h4>
                </div>
              </div>
            ))}
          </Slider>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-1 rounded-full shadow-lg hover:bg-gray-500 transition-colors duration-300"
            onClick={() => sliderRef.current.slickPrev()}
            style={{ zIndex: 1, width: '30px', height: '30px' }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-1 rounded-full shadow-lg hover:bg-gray-500 transition-colors duration-300"
            onClick={() => sliderRef.current.slickNext()}
            style={{ zIndex: 1, width: '30px', height: '30px' }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
