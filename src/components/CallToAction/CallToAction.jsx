import appstore from "../../assets/app-store.png";
import playstore from "../../assets/play-store.png";
import app from "../../assets/app.png";
import toast from "react-hot-toast";

const CallToAction = () => {
  const handleClick = () => {
    toast.error("Our mobile app is still in development. Stay tuned!");
  };

  return (
    <div className="bg-[#FBF1E9] max-w-[1400px] mx-auto rounded-xl py-12 my-12 relative">
      <div className="flex gap-10 justify-between mx-4 items-center">
        <div>
          <div className="space-y-6">
            <h3 className="text-[22px] md:text-5xl font-bold">
              The KaziMart App
            </h3>
            <p className="text-[18px] md:text-2xl text-gray-700">
              Enjoy Shopping with{" "}
              <strong className="text-gray-900">Less Effort</strong>
            </p>

            <button onClick={handleClick}>
              <div className="flex flex-col md:flex-row gap-4">
                <img className="rounded-lg" src={appstore} alt="App Store" />
                <img className="rounded-lg" src={playstore} alt="Play Store" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        src={app}
        className="w-36 md:w-52 absolute bottom-0 right-0 mr-4"
        alt="App"
      />
    </div>
  );
};

export default CallToAction;
