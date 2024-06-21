import { BiSolidMessageRounded } from "react-icons/bi";
import { IoCaretDownOutline } from "react-icons/io5";

import { FaHeart } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";

function App() {
  const [val,setVal]=useState()

  const onChangeHandeler=()=>{
      console.log(val)
  }
  return (
    <div style={{background:`${val}`}} className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-around items-center text-white m-auto w-[30rem] h-20 rounded-full bg-yellow-800">
          <div className="flex  text-4xl justify-center items-center gap-x-2">
            <BiSolidMessageRounded className="" size={40} />
            <p>6000</p>
          </div>
          <div className="flex text-4xl justify-center items-center gap-x-2">
            <FaHeart />
            <p>890</p>
          </div>
          <div className="flex text-4xl justify-center items-center gap-x-2">
            <IoPerson />
            <div>7777</div>
          </div>
        </div>
        <div>
          <IoCaretDownOutline className="text-yellow-800 -mt-5" size={60} />
        </div>
        <div className="w-16 h-8 bg-slate-300   rounded-full">

        </div>
      </div>

      <input type="color" onChange={(e)=>{
        onChangeHandeler()
        setVal(e.target.value)

      }} />
    </div>
  );
}

export default App;
