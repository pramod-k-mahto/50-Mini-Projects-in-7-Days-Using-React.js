import { useState, useEffect } from "react";
import { FaCat } from "react-icons/fa6";
import { PiAlienDuotone } from "react-icons/pi";
import { GiElephant } from "react-icons/gi";
import { GiLion } from "react-icons/gi";
import { FaSpider } from "react-icons/fa6";

function App() {
  const [firstExpand, setFirstExpand] = useState(false);
  const [width, setWidth] = useState(0);
  const [dis, setDis] = useState("");

  const [circle1, setCircle1] = useState(false);
  const [circle2, setCircl2] = useState(false);
  const [circle3, setCircle3] = useState(false);
  const [circle4, setCircle4] = useState(false);
  const [circle5, setCircle5] = useState(false);

  useEffect(() => {
    if (width >= 0) {
      setCircle1(true);
    } else {
      setCircle1(false);
    }

    if (width >= 25) {
      setCircl2(true);
    } else {
      setCircl2(false);
    }
    if (width >= 50) {
      setCircle3(true);
    } else {
      setCircle3(false);
    }
    if (width >= 75) {
      setCircle4(true);
    } else {
      setCircle4(false);
    }
    if (width === 100) {
      setCircle5(true);
    } else {
      setCircle5(false);
    }
  }, [width]);

  console.log(width);

  console.log(firstExpand);

  return (
    <div className="App">
      <div>
        <div className="w-96 mt-16 m-auto ">
          <div className={` w-96 h-1  flex `}>
            <div className="w-20 -ml-1 -mt-1.5">
              <FaCat size={30}  color={`${circle1 ? "blue" : "gray"}`} />
            </div>
            <div className="w-20 ml-[3.3rem] -mt-1.5">
              <FaSpider size={30} color={`${circle2 ? "blue" : "gray"}`} />
            </div>

            <div className="w-20 ml-[4.6rem] -mt-1.5">
              <GiLion size={30} color={`${circle3 ? "blue" : "gray"}`} />
            </div>

            <div className="w-20 ml-[4.0rem] -mt-1.5">
              <GiElephant size={30} color={`${circle4 ? "blue" : "gray"}`} />
            </div>

            <div className="w-20 ml-[4.3rem] -mt-1.5">
              <PiAlienDuotone
                size={30}
                color={`${circle5 ? "blue" : "gray"}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* prograssion */}

      <div className="w-96 h-1 bg-gray-300 mt-10  m-auto ">
        <div
          className={` w-96 h-1 transition-all duration-500 flex  bg-blue-600 z-50`}
          style={{ width: firstExpand ? `${width}%` : "2px" }}
        >
          <div
            className={` -mt-1.5 bg-gray-300 border-4 h-3 w-3 p-1 rounded-full text-white ${
              circle1 && "bg-white border-4 border-blue-500 -mt-1.5 "
            }`}
          >
            o
          </div>

          <div
            className={`ml-[4.6rem] -mt-1.5 border-4 border-gray-300 bg-gray-300 h-3 w-3 p-1 rounded-full text-white ${
              circle2 && "bg-white border-4 border-blue-500 -mt-1.5 "
            }`}
          >
            .
          </div>
          <div
            className={`ml-[5.4rem] -mt-1.5 border-4 border-gray-300 bg-gray-300 h-3 w-3 p-1 rounded-full text-white ${
              circle3 && "bg-white border-4 border-blue-500 -mt-1.5 "
            }`}
          >
            .
          </div>

          <div
            className={`ml-[4.6rem] -mt-1.5 border-4 border-gray-300 bg-gray-300 h-3 w-3 p-1 rounded-full text-white ${
              circle4 && "bg-white border-4 border-blue-500 -mt-1.5 "
            }`}
          >
            .
          </div>
          <div
            className={`ml-[5.4rem] -mt-1.5 border-4 border-gray-300 bg-gray-300 h-3 w-3 p-1 rounded-full text-white ${
              circle5 && "bg-white border-4 border-blue-500 -mt-1.5 "
            }`}
          >
            .
          </div>
        </div>
        <div className="ml-20 mt-5">
          <button
            onClick={() => {
              if (width <= 100 && width > 0) {
                setFirstExpand(true);
                setWidth(width - 25);
                console.log("I lowest");
              }
            }}
            className="mt-4 m-9 p-2 w-24 bg-blue-500 rounded-3xl text-white"
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (width < 100) {
                setFirstExpand(true);
                setWidth(width + 25);
                console.log("I retched");
              }
            }}
            className="mt-4  p-2 w-24 bg-blue-500 rounded-3xl text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
