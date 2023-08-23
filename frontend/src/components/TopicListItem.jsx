import React , {useState}from "react";
import TopicList from "./TopicList";
import PhotoList from "./PhotoList";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, slug, categories }) => {   
  const [selectedTopic, setSelectedTopic] = useState(slug);

  const handleSelectTopic = () => {
    setSelectedTopic(slug);
  };
       
  return (
    <div className={`topic-list__item ${selectedTopic === slug ? "active" : ""}`} onClick={handleSelectTopic} >
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
