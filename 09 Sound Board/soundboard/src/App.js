import { useRef } from "react";
import applauseSound from "./assets/sound-board_sounds_applause.mp3";
import booSound from "./assets/sound-board_sounds_boo.mp3";
import gaspSound from "./assets/sound-board_sounds_gasp.mp3";
import tadaSound from "./assets/sound-board_sounds_tada.mp3";
import wrongSound from "./assets/sound-board_sounds_wrong.mp3";

function App() {
  const applauseRef = useRef(null);
  const booRef = useRef(null);
  const gaspRef = useRef(null);
  const tadaRef = useRef(null);
  const wrongRef = useRef(null);

  const playAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to the start
      audioRef.current.play();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen gap-10">
      <div
        onClick={() => playAudio(applauseRef)}
        className="opacity-50 w-36 h-36 rounded-full shadow-2xl shadow-black text-black bg-white flex justify-center items-center cursor-pointer"
      >
        APPLAUSE
        <audio ref={applauseRef}>
          <source src={applauseSound} type="audio/mpeg" />
        </audio>
      </div>
      <div
        onClick={() => playAudio(booRef)}
        className="opacity-50 w-36 h-36 rounded-full shadow-2xl shadow-black text-black bg-white flex justify-center items-center cursor-pointer"
      >
        BOO
        <audio ref={booRef}>
          <source src={booSound} type="audio/mpeg" />
        </audio>
      </div>
      <div
        onClick={() => playAudio(gaspRef)}
        className="opacity-50 w-36 h-36 rounded-full shadow-2xl shadow-black text-black bg-white flex justify-center items-center cursor-pointer"
      >
        GASP
        <audio ref={gaspRef}>
          <source src={gaspSound} type="audio/mpeg" />
        </audio>
      </div>
      <div
        onClick={() => playAudio(tadaRef)}
        className="opacity-50 w-36 h-36 rounded-full shadow-2xl shadow-black text-black bg-white flex justify-center items-center cursor-pointer"
      >
        TADA
        <audio ref={tadaRef}>
          <source src={tadaSound} type="audio/mpeg" />
        </audio>
      </div>
      <div
        onClick={() => playAudio(wrongRef)}
        className="opacity-50 w-36 h-36 rounded-full shadow-2xl shadow-black text-black bg-white flex justify-center items-center cursor-pointer"
      >
        WRONG
        <audio ref={wrongRef}>
          <source src={wrongSound} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default App;
