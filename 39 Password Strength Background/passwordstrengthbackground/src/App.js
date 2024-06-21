import { useEffect, useState } from "react";

function App() {
  const [blurAmount, setBlurAmount] = useState(15); // Initial blur amount
  const getPassword = (data) => {
    const newLength = data.length;
    // Adjust blur amount based on password length
    const newBlurAmount = 15 - newLength;
    setBlurAmount(newBlurAmount < 0 ? 0 : newBlurAmount);
  };

  useEffect(() => {
  }, [blurAmount]);

  return (
    <div className="h-screen w-screen pt-14" style={{ position: "relative" }}>
      <div
        style={{
          backgroundImage:
            'url("https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: `blur(${blurAmount}px)`, // Dynamic blur amount
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <div className="w-96 h-[23rem] flex flex-col m-auto items-center rounded-xl bg-white bg-opacity-80 p-1">
        <h1 className="text-3xl mt-5">Image Password Strength</h1>
        <h6>Change the password to see the effect</h6>
        <div className="flex items-center justify-center space-y-5 flex-col mt-5">
          <div>
            <label htmlFor="email">
              Email:
              <br />
              <input
                className="w-80 rounded-full outline-none border-2 pl-2 h-10"
                id="email"
                type="email"
                placeholder="Email"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password">
              Password:
              <br />
              <input
                id="password"
                className="w-80 rounded-full outline-none border-2 pl-2 h-10"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  getPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <button className="w-80 bg-slate-500 h-10 rounded-full text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
