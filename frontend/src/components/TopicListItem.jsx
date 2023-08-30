
import React, { useState } from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
 const { title, slug, onSelectTopic,id} = props;
  const handleClick = () => {  
    onSelectTopic(id);
  };

  return (
    <div className={`topic-list__item `} onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
