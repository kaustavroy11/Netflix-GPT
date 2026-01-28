import { IMG_CDN_URL } from "../utils/constant";

const ContentCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 pr-4">
      <img
        alt="Content Card"
        src={IMG_CDN_URL + posterPath}
        className="w-37.5 aspect-2/3 object-cover rounded-md"
      />
    </div>
  );
};

export default ContentCard;
