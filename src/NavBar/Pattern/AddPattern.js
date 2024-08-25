import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from "../../Config/axiosConfig";

const AddPattern = () => {
  const [pattern, setPattern] = useState({
    title: "",
    description: "",
    materials: "",
    instructions: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPattern({ ...pattern, [name]: value });
  };

  const handleStepChange = (index, value) => {
    const newInstructions = [...pattern.instructions];
    newInstructions[index] = { stepNumber: index + 1, description: value };
    setPattern({ ...pattern, instructions: newInstructions });
  };

  const addStep = () => {
    setPattern({ ...pattern, instructions: [...pattern.instructions, { stepNumber: pattern.instructions.length + 1, description: "" }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: pattern.title,
      description: pattern.description,
      materials: pattern.materials,
      instructions: JSON.stringify(pattern.instructions),
    };

    try {
      const response = await axiosInstance.post("/api/pattern/create", formData);
      toast.success(response.data.msg || "Pattern added successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg || "An error occurred.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFE7E3] p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add New Pattern
        </h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-serif">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border rounded mt-1 font-serif"
            placeholder="Enter pattern title"
            value={pattern.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-serif"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full px-4 py-2 border rounded mt-1 font-serif"
            placeholder="Enter pattern description"
            value={pattern.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="materials" className="block text-gray-700 font-serif">
            Materials
          </label>
          <input
            type="text"
            id="materials"
            name="materials"
            className="w-full px-4 py-2 border rounded mt-1 font-serif"
            placeholder="Enter materials needed"
            value={pattern.materials}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-serif">Instructions</label>
          {pattern.instructions.map((step, index) => (
            <div key={index} className="mb-2">
              <textarea
                className="w-full px-4 py-2 border rounded mt-1 font-serif"
                placeholder={`Step ${index + 1}`}
                value={step.description}
                onChange={(e) => handleStepChange(index, e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className="bg-white text-black py-2 px-4 mt-2 rounded border border-gray-200"
          >
            Add Step
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-[#FFB6B3] py-2 px-4 rounded hover:bg-gray-200 transition duration-300 font-serif"
        >
          Submit Pattern
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddPattern;
