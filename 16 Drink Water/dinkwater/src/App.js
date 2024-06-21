import { useState } from "react";

function App() {
  const [height, setHeight] = useState(252);
  const [liter, setLiter] = useState(1.75);
  const [literPercent, setLiterPercent] = useState(12.5);
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);

  const reduce = () => {
    // setHeight(height - 36);
    // setLiter(liter - 0.25);
    // setLiterPercent(literPercent + 12.5);
  };
  return (
    <div className="w-screen h-auto bg-slate-500 overflow-hidden ">
      <div className="w-96  m-auto  flex-col  justify-around items-center  ">
        <div className="text-center mt-16">
          <h1 className="text-xl font-semibold  ">Drink Water</h1>
          <h1 className="font-medium">Goal: 2 liters</h1>
        </div>

        <div className="w-72 h-[288px] bg- mx-10 mt-10 bg-green-400  overflow-hidden   shadow-2xl flex-col justify-center items-center shadow-slate-900 rounded-full">
          <div
            style={{ height: `${height}px` }}
            className=" flex  w-[100%]  z-20  bg-red-500 justify-center items-center   overflow-hidden   "
          >
            <p>
              {liter}L
              <br /> Remained
            </p>
          </div>

          <div className="  h-[100%] z-50 w-[100%] text-center bg-purple-700">
            <p className=" h-[100%] text-center justify-center items-start pt-1 flex bg-text-white">
              {literPercent}%
            </p>
          </div>
        </div>

        <div className="mt-28">
          <h1 className="my-5 text-center ">
            Select How Many glass of water you have drank
          </h1>
          <div className="flex m-auto gap-5  justify-evenly w-64 flex-wrap">
            <div
              onClick={() => {
                reduce();
                setToggle(!toggle);
                if (toggle) {
                  setHeight(height + 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                } else {
                  setHeight(height - 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                }
              }}
              className={
                toggle
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                if (toggle1) {
                  setHeight(height + 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent - 12.5);
                  setToggle1(!toggle1);
                } else {
                  setHeight(height - 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                  setToggle(true);
                  setToggle1(!toggle1);
                }
              }}
              className={
                toggle1
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();
                setToggle2(!toggle2);

                if (toggle2) {
                  setHeight(height + 108);
                  setLiter(liter + 0.75);
                  setLiterPercent(literPercent - 33.7);
                } else {
                  setToggle1(true);
                  setToggle(true);
                  setHeight(height - 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 24);
                }
              }}
              className={
                toggle2
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();
                setToggle3(!toggle3);
                if (toggle3) {
                  setHeight(height + 4 * 36);
                  setLiter(liter + 4 * 0.25);
                  setLiterPercent(literPercent - 4 * 12.5);
                } else {
                  setToggle(true);
                  setToggle1(true);
                  setToggle2(true);
                  setHeight(height - 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                }
              }}
              className={
                toggle3
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();
                setToggle4(!toggle4);
                if (toggle4) {
                  setToggle(true);
                  setToggle1(true);
                  setToggle2(true);
                  setToggle3(true);
                  setHeight(height - 5 * 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                } else {
                  setHeight(height + 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                }
              }}
              className={
                toggle4
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();

                setToggle5(!toggle5);
                if (toggle5) {
                  setToggle(true);
                  setToggle1(true);
                  setToggle2(true);
                  setToggle3(true);
                  setToggle4(true);
                  setHeight(height - 6 * 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                } else {
                  setHeight(height + 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                }
              }}
              className={
                toggle5
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();

                setToggle6(!toggle6);
                if (toggle6) {
                  setToggle(true);
                  setToggle1(true);
                  setToggle2(true);
                  setToggle3(true);
                  setToggle5(true);
                  setToggle4(true);
                  setHeight(height - 7 * 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                } else {
                  setHeight(height + 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                }
              }}
              className={
                toggle6
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>

            <div
              onClick={() => {
                reduce();

                setToggle7(!toggle7);
                if (toggle7) {
                  setToggle(true);
                  setToggle1(true);
                  setToggle2(true);
                  setToggle3(true);
                  setToggle5(true);
                  setToggle4(true);
                  setToggle6(true);
                  setHeight(height - 8 * 36);
                  setLiter(liter - 0.25);
                  setLiterPercent(literPercent + 12.5);
                } else {
                  setHeight(height + 36);
                  setLiter(liter + 0.25);
                  setLiterPercent(literPercent - 12.5);
                }
              }}
              className={
                toggle7
                  ? "h-16 w-12 bg-slate-200 text-center text-sm py-4 rounded-b-2xl"
                  : "h-16 w-12 text-center text-sm py-4 rounded-b-2xl bg-slate-400"
              }
            >
              <p>250</p>
              <p>Ml</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
