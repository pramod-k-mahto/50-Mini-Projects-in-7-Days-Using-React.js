import { useState, useEffect } from "react";

function App() {
  const [speed, setSpeed] = useState(1);
  const [letter, setLetter] = useState("");
  const myString = "We love programming ";

  useEffect(() => {
    let count = 0;
    const len = myString.length;

    const interval = setInterval(() => {
      if (count <= len) {
        setLetter((prev) => myString.slice(0, count));
        count++;
      } else {
        count = 0;
        setLetter("");
      }
    }, 300 / speed);

    return () => clearInterval(interval);
  }, [speed, myString]);

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="w-96 h-80 flex flex-col justify-end items-center space-y-20 m-auto">
        <p>{letter}_</p>
        <label
          htmlFor="speed"
          className="w-36 px-5 h-10 bg-white shadow-lg shadow-slate-500 rounded-3xl text-center py-2"
        >
          Speed:
          <input
            type="Number"
            value={speed}
            id="speed"
            onChange={(e) => {
              if (Number(e.target.value) <= 0) {
                setSpeed(1);
              } else {
                setSpeed(Number(e.target.value));
              }
            }}
            className="text-black bg-white w-14 rounded-3xl px-2 pl-1 mb-10 outline-none"
          />
        </label>
      </div>
    </div>
  );
}

export default App;
