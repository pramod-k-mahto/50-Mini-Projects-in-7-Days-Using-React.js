import { IoMdHome } from "react-icons/io";
import { MdHomeWork } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const imageList = [
    "https://i.pinimg.com/236x/b2/84/d6/b284d653ff401b21ba345dff6769e5fd.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycCyqQcAsBysR0kIa1mpYlLGHpfW5NNJGWU9boRnH7dbO1u8xT-rZPW1x7pROH73sF-A&usqp=CAU",
    "https://i.pinimg.com/736x/31/b8/db/31b8db354a9995789ecb1db69944fd04.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKrWch6R5tgj2bNKiIpckXt1q6Yxig1PwYoczI2cEw4mK0-1S2Cgm6orpx-_gkcGaXU4&usqp=CAU",
  ];
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <div className=" w-80   m-auto  flex ">
        <div className="   h-24 w-1 mt-24   flex flex-col ">
          <div className="   h-12 rounded-l-2xl bg-black"></div>
          <div className=" mt-1 rounded-l-2xl h-12 bg-black "></div>
        </div>

        <div className="w-72 mt-5 h-[32rem]  rounded-2xl border-4 flex flex-col justify-between border-black">
          <div className="flex-grow justify-between  items-center">
            <img
              className=" h-[28rem] w-72  flex  rounded-t-xl"
              src={imageList[index]}
              alt="img"
            />
          </div>
          <div className={ `bg-white p-2 rounded-2xl rounded-t-sm flex justify-around w-full`}>
            <button
              onClick={() => {
                setIndex(0);
                setToggle1(true)
                setToggle2(false)
                setToggle3(false)
                setToggle4(false)

              }}
              className={` ${toggle1 && "text-slate-400"} text-2xl hover:text-slate-400 `}
            >
              <IoMdHome />
            </button>

            <button
              onClick={() => {
                setIndex(1);
                setToggle1(false)
                setToggle2(true)
                setToggle3(false)
                setToggle4(false)

              }}
              className={` ${toggle2 && "text-slate-400"} text-2xl hover:text-slate-400 `}
            >
              <MdHomeWork />
            </button>

            <button
              onClick={() => {
                setIndex(2);
                setToggle1(false)
                setToggle2(false)
                setToggle3(true)
                setToggle4(false)

              }}
              className={` ${toggle3 && "text-slate-400"} text-2xl hover:text-slate-400 `}
            >
              <IoBookSharp />
            </button>

            <button
              onClick={() => {
                setIndex(3);
                setToggle1(false)
                setToggle2(false)
                setToggle3(false)
                setToggle4(true)

              }}
              className={` ${toggle4 && "text-slate-400"} text-2xl hover:text-slate-400 `}
            >
              <FaUsers />
            </button>
          </div>
        </div>
        <div className=" h-24 rounded-r-lg bg-black mt-24 w-1"></div>
      </div>
    </div>
  );
}

export default App;
