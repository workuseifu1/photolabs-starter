import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";



const PhotoListItem = ({liked, favorites,selectedTopics, toggleFavorites, photo, openModal}) => {
  /* Insert React */
  
  const [isLiked, setIsLiked] = useState(liked);

  const handleFavIconClick = () => {
    setIsLiked(!isLiked);
  }
  return (
    <div className="photo-list__item" >
      <PhotoFavButton 
      photoId={photo.id} 
      favorites={favorites} 
      toggleFavorites={toggleFavorites} 
      selected={isLiked} />      
      <img onClick={() => openModal(photo.id)} 
      src={photo.urls.regular} 
      alt={`Photo by ${photo.user.username}`} 
      className="photo-list__image" />
      <div className="photo-list__user-info">
        <h3 className="photo-list__user-details">{photo.user.username}</h3>
        <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>          
      <img src={photo.user.profile}  alt={`${photo.user.username}'s profile`} className="photo-list__user-profile" />
    </div>
  );
};

export default PhotoListItem;
