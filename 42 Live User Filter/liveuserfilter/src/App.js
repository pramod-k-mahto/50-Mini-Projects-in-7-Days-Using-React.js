import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

function App() {
  const [useList, setUserList] = useState([]);
  const getUser = async () => {
    let res = await fetch("https://dummyjson.com/users");
    res = await res.json();
    console.log(res.users);
    setUserList(res.users);
  };

  const updateUser = async (serachItem) => {
    let res = await fetch(`https://dummyjson.com/users/search?q=${serachItem}`);
    res = await res.json();
    console.log(res.users);
    setUserList(res.users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-300">
      <div className="bg-white m-auto w-96">
        <div className="flex justify-center h-24 py-5 ">
          <label htmlFor="serach">
            <input
              onChange={(e) => {
                updateUser(e.target.value);
              }}
              type="text"
              id="serach"
              className="w-72  bg-slate-300 rounded-full h-10 outline-none px-3 "
              placeholder="Serach by Name and/or address"
            />
          </label>
          <CiSearch size={23} className="mt-2 ml-1" />
        </div>
        <div className="flex-col h-screen overflow-y-auto  pl-4 bg-slate-100 ">
          {useList.map((item, index) => {
            return (
              <div
                key={index}
                className="flex mb-5  py-2 border-t-2 border-t-slate-200"
              >
                <img
                  className="w-10 h-10 rounded-full "
                  src={item.image}
                  alt=""
                />
                <div className="ml-3 ">
                  <h1 className="text-sm font-semibold">
                    {item.firstName} {item.lastName}
                  </h1>
                  <p className="text-xs">{item.address.city}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
