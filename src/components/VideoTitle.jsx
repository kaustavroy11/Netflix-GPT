const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div className="">
        <button className="bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
