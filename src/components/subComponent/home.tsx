import React from "react";

const Home: React.FC<{}> = () => {
  function toggleContainer() {
    const container = document.querySelector(".flex-1");
    container.classList.toggle("hidden");
  }
  return (
    <div className="flex justify-center rounded-lg  min-h-[600px]  bg-gray-700 bg-opacity-70">
      <div className="max-w-[800px] w-full      border-gray-100 border-1 rounded-lg">
        <div className="relative font-semibold bg-[#e5e7ebbf] dark:bg-[rgba(26,36,50,0.85)] border-b border-gray-300 dark:border-gray-700 h-8 flex items-center justify-center">
          <p className="text-white">Home</p>
          <div className="absolute right-3 gap-1 flex">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            {/* Replace div with id close with a button */}
            <button
              id="close"
              className="w-3 h-3 bg-red-500 rounded-full"
            ></button>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-20">
          <div className="flex justify-center p-4 sm:p-8">
            <img
              src="https://developer-portfolio-ibrahim-memons-projects.vercel.app/_next/image?url=%2FMe.png&w=384&q=75"
              className="w-[200px]"
              alt="Profile"
            />
          </div>
          <div className="flex justify-center">
          <div className="flex  mt-6 cursor-pointer w-max  tracking-tighter text-7xl max-md:text-4xl font-semibold text-white duration-3000       ">
            <h1 className="animate-typing w-max overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold ">EKARSHA SUMAJ
            </h1>
          </div>
          </div>

          <br />
          <br />
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter text-gray-300 max-w-[600px] text-center">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>{" "}
            🍿
          </p>
          <p className="text-md text-gray-200 my-5 max-w-[600px] text-center">
            Passionate Software Engineer with a focus on Web development,
            dedicated to crafting elegant and user-friendly Web applications.
          </p>
          <br />
          <div className="text-md flex justify-center">
            {/* <button onClick={() => window.open("mailto:ekarshasumajkotikalapoodi@gmail.com")} className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent">
              Contact Me
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
