import { useState } from "react";

function App() {
  const [topPassword, setTopPassword] = useState(28);
  const [topEmail, setTopEmail] = useState(28);
  const [emailLabel, setEmailLabel] = useState("Email");
  const [passwordLabel, setPasswordLabel] = useState("Password");

  const handlePasswordFocus = () => {
    const letters = passwordLabel.split("");
    setPasswordLabel("");
    letters.forEach((letter, idx) => {
      setTimeout(() => {
        setPasswordLabel((prev) => prev + letter);
      }, idx * 120); // 50ms delay for each letter
    });
    setTopPassword(4);
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      const letters = passwordLabel.split("");
      setPasswordLabel("");
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          setPasswordLabel((prev) => prev + letter);
        }, idx * 120); // 50ms delay for each letter
      });
      setTopPassword(28);
    }
  };

  const animateLabelText = () => {
    const letters = emailLabel.split("");
    setEmailLabel("");
    letters.forEach((letter, idx) => {
      setTimeout(() => {
        setEmailLabel((prev) => prev + letter);
      }, idx * 120); // 50ms delay for each letter
    });
    setTopEmail(4);
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      const letters = emailLabel.split("");
      setEmailLabel("");
      letters.forEach((letter, idx) => {
        setTimeout(() => {
          setEmailLabel((prev) => prev + letter);
        }, idx * 120); // 50ms delay for each letter
      });
      setTopEmail(28);
    }
  };

  return (
    <div className="bg-slate-200">
      <div className="w-[48rem] h-[96vh] py-1 flex m-auto">
        <div className="bg-white w-[50%] h-[96vh] rounded-sm">
          <div className="mt-16 h-96 flex-col text-center justify-center items-center">
            <p className="text-3xl font-bold">Login</p>
            <div className="relative">
              <input
                className="h-10 w-72 outline-none border-b-2 border-red-300 my-5"
                type="password"
                id="password"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              <label
                htmlFor="password"
                className="w-72 text-left cursor-pointer absolute transition-top duration-300"
                style={{ left: "47px", top: `${topPassword}px` }}
                onClick={handlePasswordFocus}
              >
                {passwordLabel}
              </label>
            </div>
            <div className="relative my-5">
              <input
                className="h-10 outline-none w-72 border-b-2 border-red-300 my-5"
                type="email"
                id="email"
                onFocus={animateLabelText}
                onBlur={handleEmailBlur}
              />
              <label
                htmlFor="email"
                className="w-72 text-left cursor-pointer absolute transition-top duration-300"
                style={{ left: "47px", top: `${topEmail}px` }}
                onClick={animateLabelText}
              >
                {emailLabel}
              </label>
            </div>
            <button className="bg-pink-400 w-72 h-14 my-5">Login</button>
            <p>Don't have an account? Register</p>
          </div>
        </div>

        <div className="bg-black w-[50%] h-[96vh] rounded-xl">
          <img
            className="rounded-sm"
            src="https://img.freepik.com/premium-photo/beautiful-flower-wallpaper-background_917213-42761.jpg"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
