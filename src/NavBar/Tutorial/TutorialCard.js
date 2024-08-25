import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TutorialCard = ({ tutorials }) => {
    
    const navigate = useNavigate();

    const handleLearnMore = (id) => {
        navigate(`/tutorial/${id}`);
    };

      return (
        <div className="my-8 mx-24 ml-40 font-serif grid grid-cols-1 md:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
                <div key={index} className="bg-[#FFE7E3] w-[450px] h-[450px] p-6 rounded shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                    <img className="bg-gray-200 w-full h-48 object-cover mb-2 rounded"
                        src={tutorial.imgUrl} alt={tutorial.title} />
                    
                    <div className='h-[100px]'>
                        <p>{tutorial.description}</p>
                    </div>

                    <div className='mt-2'>
                        <button 
                            className="bg-white text-black py-2 px-4 mt-4 rounded border border-gray-200"
                            onClick={() => handleLearnMore(tutorial.id)} // Pass the tutorial's id
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
      );
    };
    
    export default TutorialCard;