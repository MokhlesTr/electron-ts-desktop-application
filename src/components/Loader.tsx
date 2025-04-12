import Lottie from "lottie-react";
import coffeeLoader from "../assets/lottie/coffeeLoader.json";

function Loader() {
  return (
    <div className="flex gap-2 items-center justify-center h-screen w-screen">
      {/* <span className="loading loading-ring w-[7%] h-[30%] bg-green-400"></span> */}
      <Lottie
        animationData={coffeeLoader}
        loop
        autoplay
        className="w-28 h-28"
      />
    </div>
  );
}

export default Loader;
