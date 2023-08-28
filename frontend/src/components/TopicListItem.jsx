// import React, {useState} from 'react';
// import '../styles/TopicListItem.scss';

// const TopicListItem = ({ title, slug,onSelectTopic, selected}) => {
//   const [selectTopic, setSelectTopic] = useState(selected)
//   const handleClick = () => {
//     setSelectTopic(!selectTopic);
//     onSelectTopic(slug);
//   };

//   return (
//     <div className={`topic-list__item ${isTopicSelected ? 'selected' : ''}`} onClick={handleClick}>
//       <span>{title}</span>
//     </div>
//   );
// };
import React, { useState } from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ title, slug, onSelectTopic, selected }) => {
  const [isTopicSelected, setIsTopicSelected] = useState(selected);

  const handleClick = () => {
    setIsTopicSelected(!isTopicSelected);
    console.log(slug)
    onSelectTopic(slug);
  };

  return (
    <div className={`topic-list__item ${isTopicSelected ? 'selected' : ''}`} onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
