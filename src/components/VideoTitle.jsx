import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-linear-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-lg">{overview}</p>
      <div className="flex gap-3 my-4 md:m-0">
        <button className="bg-white text-black px-2 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg flex items-center gap-2 hover:opacity-80">
          <IoMdPlay className="text-2xl" />
          <span className="font-bold">Play</span>
        </button>
        <button className="bg-gray-500/50 text-white px-2 py-2 md:px-8 md:py-3 text-lg md:text-xl rounded-lg flex items-center gap-2 hover:opacity-80">
          <IoIosInformationCircleOutline className="text-2xl" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
