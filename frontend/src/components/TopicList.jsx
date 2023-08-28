import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = ({topics, selectedTopics, onSelectTopic}) => {  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} topics={topics}selected={selectedTopics.includes(topic.slug)}
        onSelectTopic={onSelectTopic}{...topic} />
      ))}
    </div>
  );
};

export default TopicList;
