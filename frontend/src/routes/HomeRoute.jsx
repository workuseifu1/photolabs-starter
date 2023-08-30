import React, { useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics,favorites,toggleFavorites,handleSelectTopic }) => {
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (photoId) => {
    const selectedPhoto = photos.find((photo) => photo.id === photoId);
    setSelectedPhoto(selectedPhoto);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };
  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExist={favorites.length > 0}        
        onSelectTopic={handleSelectTopic}
        topics={topics}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        openModal={(photoId) => openModal(photoId)}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          openModal={(photoId) => openModal(photoId)}
          selectedPhoto={selectedPhoto}
          favorites = {favorites} 
          toggleFavorites={toggleFavorites} 
        />
      )}
    </div>
  );
};

export default HomeRoute;
