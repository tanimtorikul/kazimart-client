import appstore from "../../assets/app-store.png";
import playstore from "../../assets/play-store.png";
import deliveryman from "../../assets/deliveryman.png";
import toast from "react-hot-toast";

const CallToAction = () => {
  const handleClick = () => {
    toast.error("Our mobile app is still in development. Stay tuned!");
  };
  return (
    <div className="bg-[#CEE7DB] py-12 h-[644px] md:h-[512px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-4 justify-center">
        <div className="col-span-1">
          <div className="flex items-center gap-4">
            <div className="">
              <img className="w-40 rounded-full" alt="" />
            </div>
            <div className="space-y-6">
              <h3 className="text-[22px] md:text-4xl font-bold ">
                Make your online shop easier with our mobile app
              </h3>
              <p>
                Kazimart makes online grocery shopping fast and easy. Get
                groceries delivered and order the best of seasonal farm fresh
                food.
              </p>
              <button onClick={handleClick}>
                <div className="flex gap-4">
                  <div>
                    <img className="rounded-lg" src={appstore} alt="" />
                  </div>
                  <div>
                    <img className="rounded-lg" src={playstore} alt="" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-5">
          <img src={deliveryman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
