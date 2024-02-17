function App() {
  return (
    <div className="bg-VeryLightGray h-screen">
      <div className="flex justify-center items-center">
        <div className=" mt-5 flex-col w-60 xl:w-80">
          <h2 className="font-light text-VeryDarkBlue text-center xl:text-2xl">
            Reliable, effitient delivery
          </h2>
          <h1 className="font-semibold text-VeryDarkBlue text-center xl:text-2xl">
            Powered by technology
          </h1>
          <p className="text-center text-xs text-VeryDarkBlue xl:text-sm">
            Our artificial intelligence powered tools use millions of project
            data points to ensure that your project is successful.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="mt-5  w-60 shadow-lg md:mr-4 xl:mr-10">
          <div className="border-t-4 border-cCyan  rounded-lg bg-white p-4">
            <h1 className="font-bold text-VeryDarkBlue">Supervisor</h1>
            <p className="font-light text-xs text-VeryDarkBlue m-1">
              Monitors activity to identify project roadblocks
            </p>
            <img
              className="pl-36 w-48 mt-2"
              src="./images/icon-supervisor.svg"
              alt="supervisor"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-5  w-60 shadow-lg">
            <div className="border-t-4 border-cRed  rounded-lg bg-white p-4">
              <h1 className="font-bold text-VeryDarkBlue">Team Builder</h1>
              <p className="font-light text-xs text-VeryDarkBlue m-1">
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img
                className="pl-36 w-48 mt-2"
                src="./images/icon-team-builder.svg"
                alt="supervisor"
              />
            </div>
          </div>
          <div className="mt-5  w-60 shadow-lg">
            <div className="border-t-4 border-cOrange  rounded-lg bg-white p-4">
              <h1 className="font-bold text-VeryDarkBlue">Karma</h1>
              <p className="font-light text-xs text-VeryDarkBlue m-1">
                Regularly evaluates our talent to ensure quality
              </p>
              <img
                className="pl-36 w-48 mt-2"
                src="./images/icon-karma.svg"
                alt="supervisor"
              />
            </div>
          </div>
        </div>
        <div className="mt-5  w-60 shadow-lg mb-5 md:ml-4 xl:ml-10">
          <div className="border-t-4 border-cBlue  rounded-lg bg-white p-4  ">
            <h1 className="font-bold text-VeryDarkBlue">Calculator</h1>
            <p className="font-light text-xs text-VeryDarkBlue m-1">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              className="pl-36 w-48 mt-2"
              src="./images/icon-calculator.svg"
              alt="supervisor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
