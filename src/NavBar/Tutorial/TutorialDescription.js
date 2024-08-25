import React from 'react';

const TutorialDescription = ({ title, pattern }) => {
  return (
    <div className="container mx-auto p-4 font-serif bg-[#FFE7E3] m-8">
      <h1 className="text-4xl font-bold text-center mb-4">Clothing: {title}</h1>
      <div className="flex justify-center h-[550px] mb-8 mt-2">
        <div className="bg-[#FFE7E3] w-[594px] h-[494px] ml-4 my-4 flex items-center justify-center text-center">
          <img src={pattern.imgUrl} alt={pattern.title} className="object-cover w-full h-full rounded shadow-md" />
        </div>
      </div>

      <div className='ml-[300px] mr-8'>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Description</h2>
          <p className='font-serif'>{pattern.description}</p>
        </div>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Materials</h2>
          <ul className='list-disc ml-[30px] font-serif'>
            {pattern.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Steps</h2>
          {pattern.steps.map((step, index) => (
            <div key={index}>
              <h3 className='font-semibold my-2'>{step.title}</h3>
              <ul>
                {step.subSteps.map((subStep, subIndex) => (
                  <li key={subIndex}>{subStep}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialDescription;
