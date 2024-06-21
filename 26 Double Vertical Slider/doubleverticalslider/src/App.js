import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

function App() {
  const planet = [
    {
      name: "Earth",
      Mass: "5.972168X1024 kg",
      img: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Saturn",
      Mass: " 5.6834X1026 kg",
      img: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Neptune",
      Mass: " 1.02413X1026 kg",
      img: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Pluto",
      Mass: "(1.303±0.003)X1022 kg",
      img: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [textIndex, settextIndex] = useState(planet.length - 1);
  const [imgageIndex, setImgageIndex] = useState(0);

  return (
    <div className="w-screen  flex overflow-hidden  ">
      <div className="flex w-96 bg-slate-900 justify-center items-center h-screen    ">
        <div className="w-72 h-screen overflow-hidden">
          {planet.map((items, i) => {
            return (
              <>
                <div
                  key={i}
                  style={{
                    transform: `translateY(-${textIndex * 100}%)`,
                  }}
                  className=" h-screen  transition-transform duration-500  text-white "
                >
                  <div className="relative">
                    <div className="h-screen   w-[70rem] flex justify-between items-center ">
                      <div className=" w-80 text-center  ">
                        <p className="text-2xl">{items.name}</p>
                        <p>{items.Mass}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div>
          <button
            onClick={() => {
              if (textIndex > 0) {
                settextIndex(textIndex - 1);
                setImgageIndex(planet.length - textIndex);
              } else {
                settextIndex(planet.length - 1);
                setImgageIndex(0);

              }
            }}
            className=" bg-slate-400 text-black mt-24   w-10 rounded-l-full h-12 flex justify-center items-center "
          >
            <FaCaretDown />
          </button>
        </div>
      </div>

      <div className="flex  h-screen overflow-hidden   items-center  bg-black ">
        <div>
          <button
            onClick={() => {
              if (imgageIndex < planet.length-1) {
                setImgageIndex(imgageIndex + 1);
                settextIndex(textIndex-1);

              } else {
                setImgageIndex(0);
                settextIndex(planet.length-1);

              }
            }}
            className=" bg-slate-400 text-black   w-10 rounded-r-full h-12 flex justify-center items-center "
          >
            <FaCaretUp />
          </button>
        </div>

        <div className="w-[100rem] h-screen">
          {planet.map((items, i) => {
            return (
              <>
                <div
                  key={i}
                  style={{
                    transform: `translateY(-${imgageIndex * 100}%)`,
                  }}
                  className=" h-screen  transition-transform duration-500 bg-black text-white "
                >
                  <div className="relative">
                    <img
                      className="h-screen w-[100rem] "
                      src={items.img}
                      alt=""
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
