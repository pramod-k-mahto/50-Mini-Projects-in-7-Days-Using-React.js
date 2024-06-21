import { FaPhone } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  // const [jokes, setJokes] = useState("");
  const [messages, setMessages] = useState([
    {
      text: 'Hi',
      type: "user",
    },
  ]);
  const [isMessages, setIsMessages] = useState(false);

  const getJokes = async () => {
    let response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    response = await response.json();
    // setJokes(response.joke);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: "Can you tell Me a joke?", type: "user" },
      { text: response.joke, type: "joke" },
    ]);
    setIsMessages(true);
    console.log(response.joke);
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div className="bg-slate-100 h-screen w-screen overflow-hidden">
      <div className="w-[35rem] h-[30rem] mt-5 m-auto shadow-md flex-col shadow-neutral-600 rounded-2xl">
        <div className="bg-slate-400 pl-4 flex h-20 rounded-md text-white justify-between items-center">
          <div className="flex gap-x-5">
            <img
              className="h-14 w-14 rounded-full"
              src="https://play-lh.googleusercontent.com/MaHSnW87Az16WFdTIWXn3GoM1zNq-6UTYRqYLB7nUsBZ9NVAVgagjQDuaLhZ38qdiHI"
              alt="Dad"
            />
            <p className="mt-3">Dad</p>
          </div>
          <div className="flex gap-x-3 m-5">
            <FaPhone size={20} />
            <CiVideoOn size={20} />
            <BsThreeDotsVertical size={20} />
          </div>
        </div>

        <div className="p-5 h-80 overflow-y-auto">
          <p className="text-center">Today</p>

          {isMessages && messages ? (
            messages.map((message, index) => (
              <p
                key={index}
                className={`${
                  message.type === "user"
                    ? "bg-gray-300 float-right clear-both mt-4 p-4 rounded-l-full rounded-br-full"
                    : "bg-rose-400 text-white float-left clear-both p-4 mt-4 rounded-r-full rounded-bl-full"
                }`}
              >
                {message.text}
              </p>
            ))
          ) : (
            <p className="bg-rose-400 text-white float-left clear-both p-4 mt-4 rounded-r-full rounded-bl-full">
              ...
            </p>
          )}
        </div>

        <div
          onClick={() => getJokes()}
          className="hover:scale-[1.01] cursor-pointer bg-slate-300 h-14 rounded-full flex justify-between items-center px-7 m-3 mt-4 text-center box-border"
        >
          <p>Can You Tell Me A Joke?</p>
          <BsFillSendFill size={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
