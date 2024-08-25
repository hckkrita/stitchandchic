import React from 'react';
import { useParams } from 'react-router-dom';
import TimerComponent from '../../extras/timer';
import Counter from '../../extras/counter';

const patterns = [
  {
    imgUrl: "https://i.pinimg.com/564x/31/16/34/311634c26a0c28e3ed8247061a4cedc8.jpg",
    title: "Bunny Plush",
    description: "Organize your beauty essentials with a chic crochet makeup pouch.",
  },
];

const CategoryDetail = () => {
  const { id } = useParams();
  const pattern = patterns[id]; // Assuming id matches the index

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Amigurumi: {pattern.title}</h1>
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center">
          <div className="bg-[#FFE7E3] w-60 h-60 mb-4 flex items-center justify-center">
            <span>Stop Timer</span>
            <TimerComponent/>
          </div>
          <div className="bg-[#FFE7E3] w-60 h-60 mb-4 flex items-center justify-center">
            <span>Stitch Counter</span>
            <Counter/>
          </div>
        </div>
        <div className="bg-[#FFE7E3] w-96 h-96 ml-4 flex items-center justify-center">
          <img src={pattern.imgUrl} alt={pattern.title} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{pattern.description}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Materials</h2>
        <ul>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Pattern</h2>
        <ul>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
          <li>Stitch and Chic is here to inspire and support your crochet journey.</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryDetail;
