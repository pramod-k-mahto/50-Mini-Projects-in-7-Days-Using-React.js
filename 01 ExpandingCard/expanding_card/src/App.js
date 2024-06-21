import { MdAccountCircle } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
function App() {
  const [account, setAccount] = useState(true);
  const [notification, setNotification] = useState(false);
  const [appeareance, setAppeareance] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [language, setLanguage] = useState(false);

  return (
    <div className=" flex flex-col  gap-y-5 ">
      <div className=" w-[30rem] ml-96  mb-10 flex flex-col  gap-y-5  ">
        <h1 className="text-center font-serif  text-3xl ">Settings</h1>

        <div
          onClick={() => {
            setAccount(!account);
          }}
          className={`p-3 cu_shadow cu_color  w-[30rem] rounded-3xl  transition-h duration-700 ease-in-out ${
            account ? "h-44 rounded-3xl " : "h-12"
          }`}
        >
          <div className="flex gap-2">
            <MdAccountCircle
              size={30}
              className={`${account && "text-green-700"}`}
            />
            <p className={`text-xl ${account && "text-green-700"}`}>Account</p>
          </div>
          {account && (
            <div>
              <p className="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis, veritatis molestiae, quam explicabo ex atque quidem quo
                beatae voluptatibus ipsum corporis eius impedit odio ab iusto
                neque in inventore.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => {
            setNotification(!notification);
          }}
          className={`p-3 cu_shadow cu_color  w-[30rem] rounded-3xl  transition-h duration-700 ease-in-out overflow-hidden ${
            notification ? "h-44 rounded-3xl" : "h-12"
          }`}
        >
          <div className="flex gap-2">
            <IoIosNotifications
              size={30}
              className={`${notification && "text-green-700"}`}
            />
            <p className={`text-xl ${notification && "text-green-700"}`}>
              Notification
            </p>
          </div>
          {notification && (
            <div>
              <p className="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis, veritatis molestiae, quam explicabo ex atque quidem quo
                beatae voluptatibus ipsum corporis eius impedit odio ab iusto
                neque in inventore.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => {
            setAppeareance(!appeareance);
          }}
          className={`p-3 cu_shadow cu_color  w-[30rem] rounded-3xl  transition-h duration-700 ease-in-out overflow-hidden ${
            appeareance ? "h-44 rounded-3xl" : "h-12"
          }`}
        >
          <div className={`${appeareance && "text-green-700"} flex gap-2 `}>
            <FaEye size={30} />
            <p className="text-xl "> Appeareance</p>
          </div>

          {appeareance && (
            <div>
              <p className="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis, veritatis molestiae, quam explicabo ex atque quidem quo
                beatae voluptatibus ipsum corporis eius impedit odio ab iusto
                neque in inventore.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => {
            setPrivacy(!privacy);
          }}
          className={`p-3 cu_shadow cu_color  w-[30rem] rounded-3xl  transition-h duration-700 ease-in-out overflow-hidden ${
            privacy ? "h-44 rounded-3xl" : "h-12"
          }`}
        >
          <div className={`${privacy && "text-green-700"} flex gap-2 text-xl`}>
            <FaLock size={30} />
            Privacy and Security
          </div>
          {privacy && (
            <div>
              <p className="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis, veritatis molestiae, quam explicabo ex atque quidem quo
                beatae voluptatibus ipsum corporis eius impedit odio ab iusto
                neque in inventore.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => {
            setLanguage(!language);
          }}
          className={`p-3 cu_shadow cu_color  w-[30rem] rounded-3xl  transition-h duration-700 ease-in-out overflow-hidden ${
            language ? "h-44 rounded-3xl" : "h-12"
          }`}
        >
          <div className={`${language && "text-green-700"} flex gap-2 text-xl`}>
            <GrLanguage size={30} />
            Language
          </div>
          {language && (
            <div>
              <p className="p-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                debitis, veritatis molestiae, quam explicabo ex atque quidem quo
                beatae voluptatibus ipsum corporis eius impedit odio ab iusto
                neque in inventore.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
