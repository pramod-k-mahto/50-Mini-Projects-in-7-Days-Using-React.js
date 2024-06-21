import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);

  const img = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://t3.ftcdn.net/jpg/06/48/79/10/360_F_648791013_cQK30SdyiLrVQ96Bqn2MOkz4JmvgttGr.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
    "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    "https://th.bing.com/th/id/OIG3.5u5ZBGkvLQn1ELp4UqXH",
  ];

  return (
    <div className="w-screen h-screen relative flex items-center justify-center bg-black">
      {img.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      <div className="absolute bg-opacity-70 bg-black w-full h-full flex justify-center items-center">
        <button
          onClick={() => setIndex(index > 0 ? index - 1 : img.length - 1)}
          className="shadow-lg w-16 h-16 text-center text-white mx-4"
        >
          <FaLessThan size={40} />
        </button>

        {/* <div className="h-80 w-80 border-2 border-black rounded-full bg-opacity-5 shadow-2xl shadow-black flex items-center justify-center"> */}
        <div className="w-64 h-64 rounded-full bg-black flex items-center justify-center">
          <div
            className="w-full h-full bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${img[index]})` }}
          ></div>
        </div>
        {/* </div> */}

        <button
          onClick={() => setIndex(index < img.length - 1 ? index + 1 : 0)}
          className="shadow-lg w-16 h-16 text-center text-white mx-4"
        >
          <FaGreaterThan size={40} />
        </button>
      </div>
    </div>
  );
}

export default App;
