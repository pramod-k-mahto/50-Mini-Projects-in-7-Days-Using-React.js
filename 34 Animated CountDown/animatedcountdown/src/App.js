import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const nums = ["3", "2", "1", "0"];

  useEffect(() => {
    let interval;
    if (toggle) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === nums.length - 1) {
            setToggle(false);
            clearInterval(interval);
            return prevIndex;
          } else {
            return prevIndex + 1;
          }
        });
      }, 1000); // Adjust the interval as needed
    }
    return () => clearInterval(interval);
  }, [toggle,nums.length]);

  const handleReplay = () => {
    setToggle(true);
    setActiveIndex(0);
  };

  return (
    <div className="h-screen w-screen bg-slate-300 flex justify-center items-center">
      {toggle ? (
        <div className="counter">
          <div className="nums relative overflow-hidden w-64 h-12">
            {nums.map((num, index) => (
              <span
                key={index}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl ${
                  index === activeIndex ? 'in' : index < activeIndex ? 'out' : ''
                } ${index === activeIndex ? 'animate-goIn' : index < activeIndex ? 'animate-goOut' : ''}`}
              >
                {num}
              </span>
            ))}
          </div>
          <h4 className="text-xl mt-2 uppercase text-gray-700">Get ready</h4>
        </div>
      ) : (
        <div className="final show text-center text-gray-700 transform scale-0">
          <h1 className="text-5xl animate-shake">🎉<br />GO!</h1>
          <button
            id="replay"
            onClick={handleReplay}
            className="border border-gray-600 text-sm tracking-wide bg-transparent py-2 px-4 mt-4 rounded-full uppercase cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
