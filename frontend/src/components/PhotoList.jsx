import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({  
  photos,
  favorites,
  toggleFavorites,
  selectedTopics,
  openModal,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favorites={favorites}
          toggleFavorites={toggleFavorites}
          selectedTopics={selectedTopics}
          openModal={(photoId) => openModal(photoId)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
