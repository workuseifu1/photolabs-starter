import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos,favorites,toggleFavorites, selectedTopics, openModal }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id}  photo={photo} imageSource={photo.urls.regular} favorites={favorites} toggleFavorites={toggleFavorites}{...photo}selectedTopics={selectedTopics}
        openModal={() => openModal(photo.id)} />
      ))}
    </ul>
  );
};

export default PhotoList;
