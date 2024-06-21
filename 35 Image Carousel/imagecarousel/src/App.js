import { useState, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const imgList = [
    "https://www.imgacademy.com/sites/default/files/img-academy-organization-schema.jpg",
    "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7DZ9C-RgE_bj9vKGTeMyyFeABjZFhaNUZvTV2VlUmnvi5WIigqY8H8ZINbPXFcruBHI&usqp=CAU",
    "https://platinumlist.net/guide/wp-content/uploads/2023/03/Spider-Man-Coaster-Key-Art-1024x576.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgList.length);
      setToggle((prevToggle) => !prevToggle); // Toggle the state to trigger re-render
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [imgList.length]);

  return (
    <div className="h-screen w-screen">
      <div className="w-96 m-auto border-2 border-red-500 flex">
        <div
          className={`h-screen overflow-hidden w-[60rem] transition-transform duration-300 ${toggle ? 'translate-x-20' : ''}`}
        >
          <img className="h-screen w-[60rem]" src={imgList[index]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
