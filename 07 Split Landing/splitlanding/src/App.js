function App() {
  return (
    <div className="  border-red-400">
      <div className="flex h-screen">
        <div className=" w-[40rem] p-4 h-screen bg-[url('https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1')]  bg-contain bg-no-repeat	bg-center bg-fixed		bg-black  transition-w duration-700 hover:w-[95rem] ">
          <div className=" h-32 w-72 text-white mt-20">
            <h1 className="text-5xl w-72">PlayStation 5</h1>
            <button className=" p-4 border-2 text-xl m-5 border-white">
              BUY NOW
            </button>
          </div>
        </div>

        <div className=" w-[40rem] p-4 h-screen bg-[url('https://nagashock.com/wp-content/uploads/2023/06/nsg-ps4-controller-stock-black.webp')]  bg-contain bg-no-repeat	bg-center bg-fixed	 		bg-white  transition-w duration-700 hover:w-[100rem] ">
          <div className=" h-32 w-72 text-black float-end mt-20 ">
            <h1 className="text-5xl w-72">Xbox Series X </h1>
            <button className="p-4 border-2 text-xl m-5 border-black">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
