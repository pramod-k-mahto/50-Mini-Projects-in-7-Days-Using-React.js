import { useState } from "react";

function App() {
  const [rainbow, setRainbow] = useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-80 h-80   flex flex-col  justify-center items-center space-y-5 ">
        <h1 className="text-2xl text-red-400">Button ripple effect</h1>

        <button className="w-40 h-14 hover:scale-105 duration-300 text-white rounded-full bg-red-300">
          FILLED CIRCLE
        </button>
        <button className="w-40 h-14 hover:scale-105 duration-300 text-white rounded-full bg-red-300">
          EMPTY CIRCLE{" "}
        </button>
        <button
          onClick={() => {
            setRainbow(!rainbow);
          }}
          className="w-32 relative h-14 hover:scale-105 duration-300 text-white rounded-full bg-red-300"
        >
          <p>RAINBOW</p>

          {rainbow ? (
            <span class="absolute flex h-10 w-10">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-10 w-10 "></span>
            </span>
          ) : (
            null
          )}
        </button>

      </div>
    </div>
  );
}

export default App;
