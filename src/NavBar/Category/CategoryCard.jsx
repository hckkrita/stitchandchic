import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      onClick={onClick}
    >
      <span>→</span>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      onClick={onClick}
    >
      <span>←</span>
    </div>
  );
};

const CategoryCards = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const filteredData = props.data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLearnMore = (id) => {
    navigate(`/pattern/${id}`);
  };

  return (
    <div className="my-8 font-serif">
      {props.title === "Begginer" && (
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search Patterns"
            className="w-full max-w-lg px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4 text-center">{props.title}</h2>
      <Slider {...settings}>
        {filteredData.map((product, index) => (
          <div key={index} className="px-2">
            <div className="bg-[#FFE7E3] w-96 p-6 ml-28 rounded shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <img
                className="bg-gray-200 w-full h-48 object-cover mb-2 rounded"
                src={product.imgUrl}
                alt={product.title}
              />
              <p>{product.description}</p>
              <button 
                className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200"
                onClick={() => handleLearnMore(index)} // Pass the id (or index) of the pattern
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCards;
