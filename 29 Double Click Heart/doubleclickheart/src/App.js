import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [clickTime, setClickTime] = useState(0);

  const getPosition = (e) => {
    setCount((prev) => {
      return prev + 1;
    });
    if (count === 0) {
      setClickTime(new Date().getTime());
    } else {
      if (new Date().getTime() - clickTime < 800) {
        setShow(true);
        setClickTime(0);
      } else {
        setClickTime(new Date().getTime());
      }
    }
    let img = document.getElementById("img");
    // Get bounding client rect of the image
    const rect = img.getBoundingClientRect();
    setTop(e.clientY - rect.top - 25); // Adjusted to center the heart icon
    setLeft(e.clientX - rect.left - 25); // Adjusted to center the heart icon
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 2500);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [show]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-300">
      <div className="m-auto w-60 h-14 text-center">
        <p className="flex justify-center items-center">
          Double click on the image to <FaHeart className="mt-1 mx-1" /> it
        </p>
        <p>You liked it {count} times</p>
      </div>
      <div className="w-80 h-96 bg-white pt-5 m-auto relative">
        <div className="relative w-72 m-auto h-72">
          <img
            id="img"
            onClick={(e) => {
              getPosition(e);
            }}
            className="w-72 h-72"
            src="https://media.istockphoto.com/id/1672317574/photo/ama-dablam-mountain-peak.webp?b=1&s=170667a&w=0&k=20&c=Ea8yDEHpUemrRuMZUKGPDBE11YTWVksIupMN8FkEBf8="
            alt=""
          />
          {show && (
            <div
              style={{
                top: `${top}px`,
                left: `${left}px`,
              }}
              className={`${
                show ? "animate-myanimation" : ""
              } w-12 h-12 flex justify-center items-center`}
            >
              <FaHeart size={30} className="text-red-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
