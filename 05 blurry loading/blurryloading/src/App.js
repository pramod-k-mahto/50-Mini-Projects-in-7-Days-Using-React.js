import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [blur, setBlur] = useState(70);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          setRemove(true);

          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 50);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur((prevBlur) => {
        if (prevBlur <= 0) {
          clearInterval(interval);
          return prevBlur;
        }
        return prevBlur - 1;
      });
    }, 50);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="z-10 absolute h-screen w-screen overflow-hidden">
        <img
          style={{ filter: `blur(${blur}px)` }}
          src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg"
          alt=""
        />
      </div>
      <div
        className={`z-50 absolute top-56 text-center w-screen text-white ${
          remove && "hidden"
        }`}
      >
        <p>{count}%</p>
        <div
          className="inline-block bg-pink-300 h-0.5"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
