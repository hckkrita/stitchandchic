import React from "react";
import PatternCards from "./PatternCards";

const PatternComponent = () => {
  const amigurumi = [
    {
      imgUrl:
        "https://i.pinimg.com/564x/31/16/34/311634c26a0c28e3ed8247061a4cedc8.jpg",
      title: "Bunny Plush",
      description:
        "Organize your beauty essentials with a chic crochet makeup pouch.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/564x/3c/b9/9d/3cb99d52d6e5e0a1e5aec092b1f05370.jpg",
      title: "Totoro Plush",
      description:
        "Organize your beauty essentials with a chic crochet makeup pouch.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/34/80/62/348062ba9b2066ac4fa1a2fad38ed3b1.jpg",
      title: "Cinnamon Roll",
      description: "Create cozy and stylish cardigans perfect for any season.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/79/df/1a/79df1a70cad64ba93e45c8aaae1f2988.jpg",
      title: "Kuromi",
      description:
        "Organize your beauty essentials with a chic crochet makeup pouch.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/564x/a6/8d/12/a68d12e5620406aef283ef9c0984249f.jpg",
      title: "Chunky Dino",
      description: "Create cozy and stylish cardigans perfect for any season.",
    },
  ];

  const clothing = [
    {
      imgUrl:
        "https://i.pinimg.com/564x/7f/fd/5b/7ffd5beabf6fb60e280a7f159be87929.jpg",
      title: "Summer Top",
      description:
        "Craft lightweight and breezy tops for your summer wardrobe.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/564x/9c/61/98/9c619874f3deb592159dfd3f29d4a662.jpg",
      title: "Cardigan",
      description: "Create cozy and stylish cardigans perfect for any season.",
    },
    {
      imgUrl:
        "https://i.pinimg.com/736x/21/46/3d/21463d64d3e1b11b3095aa5457e68d23.jpg",
      title: "Ear Muffs",
      description:
        "Organize your beauty essentials with a chic crochet makeup pouch.",
    },
  ];

  return (
    <>
      {" "}
      <div className="flex px-6  ">
        <div className="w-[20%] bg-[#FFE7E3] p-8 my-[138px] rounded shadow-md">
          <h2 className="text-2xl font-serif mb-6">Pattern</h2>
          <ul className="list-disc list-inside text-lg font-serif">
            <li className="mb-2">Amigurumi</li>
            <li className="mb-2">Clothings</li>
            <li className="mb-2">Bag Charms</li>
            <li className="mb-2">Flowers</li>
          </ul>
        </div>
        <div className="w-[70%]">
          <PatternCards title="Amigurumi" data={amigurumi} />
          <PatternCards title="Clothing" data={clothing} />
        </div>
      </div>
    </>
  );
}

export default PatternComponent;
