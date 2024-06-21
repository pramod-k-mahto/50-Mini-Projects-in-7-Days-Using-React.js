import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [color, stColor] = useState(false);

  const mydragStart = (e_id) => {
    setId(e_id);
  };

  const myDrop = (e) => {
    const objId = document.getElementById(id);
    e.target.append(objId);
  };
  return (
    <div className="h-screen w-screen  flex justify-center text-white items-center bg-black">
      <div className=" h-96 w-[45rem] text-center  ">
        <h1 className="text-base">
          Drag and drop a task to change the category
        </h1>
        <div className=" h-96 w-[45rem] flex  justify-center gap-x-10">
          <div className="  w-48">
            <h1 className="text-2xl">To Do</h1>
            <div
              onDrop={(e) => {
                myDrop(e);
                stColor(false);

              }}
              onDragOver={(e) => {
                e.preventDefault();
                stColor(true);
              }}
              className={`${
                color ? "bg-gray-900" : ""
              } bg-opacity-100 flex flex-col gap-y-3 pt-3 items-center  h-[92%] w-[100%]`}
            >
              <div
                id="task1"
                draggable="true"
                onDragStart={() => {
                  mydragStart("task1");
                }}
                className=" bg-slate-500 w-36  flex relative rounded-xl px-2 text-start flex-col  "
              >
                <div className="w-5 h-5 border-2 absolute rounded-full top-1 right-1 float-end border-fuchsia-800"></div>
                <h1 className="text-2xl">Task 1</h1>
                <p>Lorem ipsum dolor, sit amet...</p>
              </div>

              <div
                id="task2"
                draggable="true"
                onDragStart={() => {
                  mydragStart("task2");
                }}
                className=" bg-slate-500 w-36  flex relative rounded-xl px-2 text-start flex-col  "
              >
                <div className="w-5 h-5 border-2 absolute rounded-full top-1 right-1 float-end border-fuchsia-800"></div>
                <h1 className="text-2xl">Task 2</h1>
                <p>Lorem ipsum dolor, sit amet...</p>
              </div>
            </div>
          </div>

          <div className="  w-48">
            <h1 className="text-2xl">In Prograss</h1>
            <div
              onDrop={(e) => {
                myDrop(e);
                stColor(false);

              }}
              onDragOver={(e) => {
                e.preventDefault();
                stColor(true);
              }}
              className={`${
                color ? "bg-gray-900" : ""
              } bg-opacity-100 flex flex-col gap-y-3 pt-3 items-center  h-[92%] w-[100%]`}
            >
              <div
                id="task3"
                draggable="true"
                onDragStart={() => {
                  mydragStart("task3");
                }}
                className=" bg-slate-500 w-36  flex relative rounded-xl px-2 text-start flex-col  "
              >
                <div className="w-5 h-5 border-2 absolute rounded-full top-1 right-1 float-end border-fuchsia-800"></div>
                <h1 className="text-2xl">Task 3</h1>
                <p>Lorem ipsum dolor, sit amet...</p>
              </div>
            </div>
          </div>

          <div className="  w-48">
            <h1 className="text-2xl">Completed</h1>
            <div
              onDrop={(e) => {
                myDrop(e);
                stColor(false);

              }}
              onDragOver={(e) => {
                e.preventDefault();
                stColor(true);
              }}
              className={`${
                color ? "bg-gray-900" : ""
              } bg-opacity-100 flex flex-col gap-y-3 pt-3 items-center  h-[92%] w-[100%]`}
            >
              <div
                id="task4"
                draggable="true"
                onDragStart={() => {
                  mydragStart("task4");
                }}
                className=" bg-slate-500 w-36  flex relative rounded-xl px-2 text-start flex-col  "
              >
                <div className="w-5 h-5 border-2 absolute rounded-full top-1 right-1 float-end border-fuchsia-800"></div>
                <h1 className="text-2xl">Task 4</h1>
                <p>Lorem ipsum dolor, sit amet...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
