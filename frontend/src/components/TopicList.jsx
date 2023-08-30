import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = ({topics, onSelectTopic}) => {  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} topics={topics} 
        onSelectTopic={onSelectTopic}{...topic} openModal={() => openModal(photo.id)}/>
      ))}
    </div>
  );
};

export default TopicList;
