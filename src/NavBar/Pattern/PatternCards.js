import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './pattern.css';

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

const PatternCards = (props) => {
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

  const handleAddPattern = () => {
    navigate('/add-pattern'); // Navigate to the AddPattern component
  };

  return (
    <div className="flex pl-8 font-serif">
     
    

      {/* Main Content with Slider */}
      <div className="w-[1500px] p-8">
        {props.title === "Amigurumi" && (
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search Patterns"
              className="w-full max-w-lg px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
                  className="bg-white text-black py-2 px-4 mt-4 ml-14 rounded border border-gray-200"
                  onClick={handleAddPattern} 
                >
                  Add Pattern
                </button>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4 text-center">{props.title}</h2>
        <Slider {...settings}>
          {filteredData.map((product, index) => (
            <div key={index} className="px-2">
              <div className="bg-[#FFE7E3] w-96 p-6 rounded shadow-md text-center">
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
    </div>
  );
};

export default PatternCards;
