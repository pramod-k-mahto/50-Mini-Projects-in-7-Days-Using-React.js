import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { ImCross } from "react-icons/im";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center ">
      <div>
        <GoSearch
          onClick={() => setToggle(!toggle)}
          color="blue"
          className={`transition-opacity h-16 w-16 -mt-6 -ml-10 absolute duration-1000  ${
            !toggle ? "opacity-100" : "opacity-0  pointer-events-none"
          }`}
        />
      </div>

      <div
        className={` h-80 flex items-center  absolute transition-all duration-700 overflow-hidden ${
          toggle ? "w-80 opacity-100  " : " w-0 opacity-0 "
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`text-blue-700 h-14 w-60 p-2 outline-none
}          rounded-3xl border-4 border-blue-700`}
        />
        <div>
          <ImCross
            onClick={() => setToggle(!toggle)}
            size={30}
            className={`text-blue-700 mt-3 transition-translate duration-1000 ${
              toggle ? "translate-y-0 ml-2 " : " translate-y-10 "
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
