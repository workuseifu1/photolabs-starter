// import React from "react";

// import "../styles/TopicListItem.scss";


// const TopicListItem = ({ id, title, slug, categories }) => {   
//   const [selectedTopic, setSelectedTopic] = useState(slug);

//   const handleSelectTopic = () => {
//     setSelectedTopic(slug);
//   };
       
//   return (
//     <div className={`topic-list__item ${selectedTopic === slug ? "active" : ""}`} onClick={handleSelectTopic} >
//       <span>{title}</span>
//     </div>
//   );
// }
import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ title, slug, onSelectTopic }) => {
  const handleClick = () => {
    onSelectTopic(slug);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
};
export default TopicListItem;
