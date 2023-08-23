import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({   id, location, urls, user,liked }) => {
  /* Insert React */
  
  const [isLiked, setIsLiked] = useState(liked);

  const handleFavIconClick = () => {
    setIsLiked(!isLiked);
  }
  return (
    <div className="photo-list__item">
      
      <img src={urls.regular} alt={`Photo by ${user.username}`} className="photo-list__image" />
      <div className="photo-list__user-info">
        <h3 className="photo-list__user-details">{user.username}</h3>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>   
      <FavIcon selected={isLiked} onClick={handleFavIconClick} />   
      <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
    </div>
  );
};

export default PhotoListItem;
