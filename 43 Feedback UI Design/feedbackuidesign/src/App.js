import { PiSmileyMehFill } from "react-icons/pi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

import { useState } from "react";

function App() {
  const [unhappy, setUnhappy] = useState(false);
  const [netural, setNetural] = useState(true);
  const [satisfied, setSatisfied] = useState(false);

  const [model, setModel] = useState(true);
  const [stats, setStats] = useState("Netural");

  return (
    <div className=" h-screen w-screen overflow-hidden bg-slate-300 ">
      {model ? (
        <div className="w-[35rem] rounded-xl h-72 bg-white m-auto mt-16 flex flex-col space-y-10 justify-center items-center  ">
          <h1 className="text-xl">How was your experience?</h1>
          <div className="flex gap-x-10 ">
            <div>
              <RiEmotionUnhappyFill
                onClick={() => {
                  setUnhappy(!unhappy);
                  setNetural(false);
                  setSatisfied(false);
                  setStats("Unhappy");
                }}
                size={50}
                className={`duration-300 ${
                  unhappy ? "scale-150 text-orange-300" : ""
                }  hover:text-orange-300 hover:scale-150`}
              />
              <p className="mt-2">Unhappy</p>
            </div>
            <div>
              <PiSmileyMehFill
                onClick={() => {
                  setNetural(!netural);

                  setUnhappy(false);
                  setSatisfied(false);
                  setStats("Netural");
                }}
                size={50}
                className={`duration-300 ${
                  netural ? "scale-150 text-orange-300" : ""
                }  hover:text-orange-300 hover:scale-150`}
              />
              <p className="mt-2">Netural</p>
            </div>
            <div>
              <BsFillEmojiSmileFill
                onClick={() => {
                  setSatisfied(!satisfied);
                  setUnhappy(false);
                  setNetural(false);
                  setStats("Satisfied");
                }}
                size={40}
                className={`duration-300 mt-1 ${
                  satisfied ? "scale-150 text-orange-300" : ""
                }  hover:text-orange-300 hover:scale-150`}
              />
              <p className="mt-2 -ml-1">Satisfied</p>
            </div>
          </div>
          <div>
            <button
              className=" shadow-md shadow-slate-800 w-32 hover:scale-105 h-14  rounded-full"
              onClick={() => {
                setModel(false);
              }}
            >
              Send Review
            </button>
          </div>
        </div>
      ) : (
        <div className=" rounded-3xl w-[34rem] h-60 bg-white m-auto mt-20 flex flex-col justify-center items-center space-y-5">
          <FaHeart size={30} className="text-red-200" />
          <p className="font-medium">Thank You! </p>
          <p className="font-medium">Feedback: {stats}</p>
          <p>We'll use your feedback to improve our customer support</p>
        </div>
      )}
    </div>
  );
}

export default App;
