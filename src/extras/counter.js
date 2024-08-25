import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className=" p-6  text-center">
                <h1 className="text-2xl font-bold mb-6">{count}</h1>
                <div className="space-x-1">
                    <button
                        className="bg-[#FFE7E3] hover:bg-[#FFE7E3]  font-bold py-2 px-4 m-2 rounded-md transition duration-300 ease-in-out"
                        onClick={increment}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-[#FFE7E3] hover:bg-[#FFE7E3]  font-bold py-2 px-4 m-2 rounded-md transition duration-300 ease-in-out"
                        onClick={decrement}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
