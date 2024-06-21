import { FaStar } from "react-icons/fa";
import { PiLessThanLight } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";
import { PiDotOutlineFill } from "react-icons/pi";
import { useState } from "react";

const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do yourself a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex <= 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-slate-200 h-screen w-screen flex justify-center items-center">
      <div className="m-auto h-96 w-[48rem] bg-white flex justify-center items-center">
        <div onClick={handlePrevious} className="border-2 border-slate-300 p-1 cursor-pointer">
          <PiLessThanLight />
        </div>

        <div className="h-72 w-[38rem] flex-col space-y-10  mx-4 text-center">
          <div className="flex justify-center gap-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div >
          <div className=" h-28 p-1">
            <p>{testimonials[index].text}</p>
          </div>

          <div>
            <img
              className="h-10 w-10 rounded-full ml-[17.5rem]"
              src={testimonials[index].photo}
              alt={testimonials[index].name}
            />
            <h3>{testimonials[index].name}</h3>
            <h2>{testimonials[index].position}</h2>
            <div className="mt-3 flex justify-center">
              {testimonials.map((_, dotIndex) => (
                <PiDotOutlineFill
                  key={dotIndex}
                  className={`mx-1 ${dotIndex === index ? "text-black" : "text-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div onClick={handleNext} className="border-2 border-slate-300 p-1 cursor-pointer">
          <TbMathGreater />
        </div>
      </div>
    </div>
  );
}

export default App;
