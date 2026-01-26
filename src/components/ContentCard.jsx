import { IMG_CDN_URL } from "../utils/constant";

const ContentCard = ({ posterPath }) => {
  return (
    <div className="min-w-40 pr-4">
      <img alt="Content Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default ContentCard;
