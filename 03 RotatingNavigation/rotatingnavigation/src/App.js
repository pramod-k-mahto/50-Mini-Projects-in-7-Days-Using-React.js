import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="overflow-hidden h-screen">
      <div className="relative gap-2 m-auto w-96 h-96  mt-24 p-10 ">
        <div
          className={`rounded-3xl shadow-2xl shadow-slate-950 h-96 w-72 absolute z-40 transition-transtranslate ${
            toggle && "hover:-translate-y-5"
          }  bg-slate-300 justify-center font-bold font-serif text-red-400 flex items-center  duration-300 `}
        >
          {toggle && <p> Hover Me</p>}
        </div>
        <div
          className={`rounded-3xl h-96 w-72 absolute transition-rotate duration-300 ${
            toggle ? "rotate-12 translate-x-10 " : "rotate-0"
          }  hover:-translate-y-2 z-30 bg-red-300  `}
        ></div>
        <div
          className={`rounded-3xl h-96 w-72 absolute z-20 transition-rotate duration-300  ${
            toggle ? "-rotate-12 -translate-x-10" : "rotate-0"
          }   hover:-translate-y-2 bg-stone-500  `}
        ></div>

        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className="rounded-full absolute z-50 w-32 h-32 ml-16 mt-[23rem] justify-center flex bg-slate-600 hover:h-[15rem] transition-all duration-300"
        >
          <div
            className={` transition-rotate duration-300 ${
              toggle ? "rotate-90" : "rotate-0"
            }  `}
          >
            <div className="h-5 w-5 absolute mt-5 -ml-2 rounded-sm border-2 border-white"></div>
            <div className="h-5 absolute w-5 mt-3 ml-1 rounded-sm border-2 border-white"></div>
          </div>
          <div
            className={`transition-rotate duration-300 ${
              toggle ? "rotate-0" : "-rotate-90"
            }`}
          >
            <div
              className={`h-5 w-5 mt-5 ml-1 rounded-sm border-2 border-white`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
