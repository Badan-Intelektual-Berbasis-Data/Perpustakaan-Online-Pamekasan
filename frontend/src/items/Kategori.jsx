/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHistory, faChild, faBrain, faUser, faFlask, faPenFancy, faCogs } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

export default function Kategori() {
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
    <div className="bg-gray-100 py-10 px-4 lg:px-80">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Kategori Buku</h3>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white px-2 py-1 rounded-lg shadow-md flex items-center space-x-2" style={{ width: '160px', margin: '0 5px' }}>
                <FontAwesomeIcon icon={category.icon} className="h-5 w-5 text-gray-600" />
                <h4 className="text-sm font-semibold mb-1 text-center">{category.label}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
