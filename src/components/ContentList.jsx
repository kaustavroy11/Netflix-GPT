import ContentCard from "./ContentCard";

const ContentList = ({ title, media }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex">
          {media?.map((media) => (
            <ContentCard key={media.id} posterPath={media.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentList;
