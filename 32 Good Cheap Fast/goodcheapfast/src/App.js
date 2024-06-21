import { useState, useEffect } from "react";

function App() {
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [fast, setFast] = useState(false);

  useEffect(() => {
    const setToggle = () => {
      if (good && cheap && fast) {
        setGood(false);
      } else if (good && fast) {
        setCheap(false);
      } else if (good && cheap) {
        setFast(false);
      } else if (fast && cheap) {
        setGood(false);
      }
    };
    setToggle();
  }, [good, cheap, fast]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="w-96 p-5 justify-center mt-16 flex flex-col space-y-5 items-center m-auto ">
        <h1>How do you want your project to be?</h1>
        <div className="flex gap-3">
          <div
            onClick={() => setGood(!good)}
            className={`flex ${
              good ? "justify-end" : "justify-start"
            } transition-transform duration-1000 items-center w-24 h-10 rounded-3xl bg-slate-500`}
          >
            <div className="w-11 h-11 bg-black rounded-full"></div>
          </div>
          <h1 className="w-10">Good</h1>
        </div>

        <div className="flex gap-3">
          <div
            onClick={() => setCheap(!cheap)}
            className={`flex ${
              cheap ? "justify-end" : "justify-start"
            } transition-transform duration-1000 items-center w-24 h-10 rounded-3xl bg-slate-500`}
          >
            <div className="w-11 h-11 bg-black rounded-full"></div>
          </div>
          <h1 className="w-10">Cheap</h1>
        </div>

        <div className="flex gap-3">
          <div
            onClick={() => setFast(!fast)}
            className={`flex ${
              fast ? "justify-end" : "justify-start"
            } transition-transform duration-1000 items-center w-24 h-10 rounded-3xl bg-slate-500`}
          >
            <div className="w-11 h-11 bg-black rounded-full"></div>
          </div>
          <h1 className="w-10">Fast</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
