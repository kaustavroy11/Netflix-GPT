import { useSelector } from "react-redux";
import ContentList from "./ContentList";

const GptContentSuggestions = () => {
  const { contentNames, contentResults } = useSelector(
    (store) => store.gptSearch,
  );
  if (!contentNames) return null;

  return (
    <div className="p-4 m-4 bg-black/85 text-white">
      <div>
        {contentNames.map((contentName, index) => (
          <ContentList
            key={contentName}
            title={contentName}
            media={contentResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptContentSuggestions;
