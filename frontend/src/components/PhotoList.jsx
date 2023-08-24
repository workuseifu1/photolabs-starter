import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, favorites,toggleFavorites}) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} imageSource={photo.urls.regular} favorites={favorites} toggleFavorites={toggleFavorites}{...photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
