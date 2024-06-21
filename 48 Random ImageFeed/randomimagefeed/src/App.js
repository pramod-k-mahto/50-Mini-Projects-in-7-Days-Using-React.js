import { PiDotsThreeBold } from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { TbMessageCircle } from "react-icons/tb";
import { BsSend } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { CiFaceSmile } from "react-icons/ci";
import { useEffect, useState } from "react";

function App() {
  const [img, setImg] = useState([
    "https://w0.peakpx.com/wallpaper/259/530/HD-wallpaper-beautiful-nature-beach-thumbnail.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5LGjf2g5kuODPnjsN2Ir95j6vBVOvYtpYA&s",
    "https://img.freepik.com/premium-photo/top-best-photo-wonderful-amazing-this-photo-lovely-take-this-picture-your-work-ai-generated_1089151-10813.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4pyTJNFk-uHcopT1cmh0__edyXqYm0US8w&s",
    "https://img.freepik.com/premium-photo/beauty-nature_935395-1987.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvLs5TX0CdPixHBlIn9AcsZyYYo_ZBh1AAw&s"
  ]);
  

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <h1 className="text-center py-5 text-xl font-semibold">
        Random Image Feed
      </h1>
      {img.map((item, index) => (
        <div key={index} className="w-96 h-screen m-auto flex-col justify-center">
          {/* Logo Box */}
          <div className="flex justify-between items-center px-1">
            <div className="flex justify-center items-center gap-2">
              <img
                className="h-10 w-10 rounded-full border-2 p-0.5 border-red-500"
                src={item}
                alt=""
              />
              <p>Pramod</p>
              <div>
                <RxDotFilled size={10} />
              </div>
              <div>2d</div>
            </div>
            <div>
              <PiDotsThreeBold />
            </div>
          </div>
          {/* Image Box */}
          <div className="my-2 h-80 flex justify-center w-[100%]">
            <img className="h-80 w-96 rounded-md" src={item} alt="" />
          </div>

          {/* Comment Box */}
          <div className="pb-4">
            <div className="flex justify-between px-1">
              <div className="flex gap-4">
                <CiHeart size={25} />
                <TbMessageCircle size={20} />
                <BsSend size={20} />
              </div>
              <div>
                <FaRegBookmark size={20} />
              </div>
            </div>
            <p className="px-1">2,345 Likes</p>
            <p className="px-1">
              <strong>Mjo732</strong> Lorem, ipsum... more
            </p>
            <p className="px-1">View all 20 comments</p>
            <div className="flex px-1">
              <input
                type="text"
                placeholder="Add a comment"
                className="w-96 outline-none"
              />
              <CiFaceSmile size={20} />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
