import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineBars2 } from "react-icons/hi2";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-screen h-screen flex items-center  justify-center bg-slate-200">
      {toggle ? (
        <div
          className={`${
            toggle
              ? "w-[25rem] rounded-full shadow-lg shadow-slate-500 bg-white transition-w duration-300  h-16 flex gap-x-5  justify-center  items-center text-xl"
              : "w-20 rounded-full bg-white h-14 "
          }`}
        >
          <div>Home </div>
          <div>Work </div>
          <div>About </div>
          <div>Contact </div>
          <div
            className=""
            onClick={() => {
              setToggle(false);
            }}
          >
            <RxCross2 size={26} />
          </div>
        </div>
      ) : (
        <div
          className="w-14 transition-w duration-300 shadow-lg shadow-slate-500 rounded-full bg-white h-14 flex justify-center items-center "
          onClick={() => {
            setToggle(true);
          }}
        >
          <HiOutlineBars2 size={20} />
        </div>
      )}
    </div>
  );
}

export default App;
