import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { product } from '../components/data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import Font Awesome icons

// Define the Next Arrow component
const NextArrow = ({ onClick, currentIndex, slideCount }) => {
  return (
    <div
      className={`absolute right-4 top-1/2 z-20 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-lg p-2 ${currentIndex === slideCount - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      style={{ width: '40px', height: '40px' }}
    >
      <FaArrowRight className="text-black" />
    </div>
  );
};

// Define the Prev Arrow component
const PrevArrow = ({ onClick, currentIndex }) => {
  return (
    <div
      className={`absolute left-4 top-1/2 z-20 transform -translate-y-1/2 cursor-pointer bg-white rounded-full shadow-lg p-2 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      style={{ width: '40px', height: '40px' }}
    >
      <FaArrowLeft className="text-black" />
    </div>
  );
};

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    afterChange: (current) => setCurrentIndex(current),
    nextArrow: <NextArrow currentIndex={currentIndex} slideCount={product.length} />,
    prevArrow: <PrevArrow currentIndex={currentIndex} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mx-auto p-4 relative'>
      <Slider {...settings}>
        {product.map((x, i) => (
          <div key={i}>
            <img src={x.image} alt={x.title} className='w-full mt-20' style={{ aspectRatio: 3 / 2, objectFit: "contain" }} />
            <h2>{x.title.slice(0, 20)}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
