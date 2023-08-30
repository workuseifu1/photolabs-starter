
import React, { useState } from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  console.log("inside topic list Item",props)
  // const [isTopicSelected, setIsTopicSelected] = useState(selected);
const { title, slug, onSelectTopic,id} = props;
  const handleClick = () => {
    // setIsTopicSelected(!isTopicSelected);
    console.log(slug)
    onSelectTopic(id);
  };

  return (
    <div className={`topic-list__item `} onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
