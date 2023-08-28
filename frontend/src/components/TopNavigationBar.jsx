import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";

const TopNavigation = ({ isFavPhotoExist, selectedTopics, onSelectTopic, topics }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectedTopics={selectedTopics} onSelectTopic={onSelectTopic}/>
      <FavBadge isFavPhotoExist={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default TopNavigation;
