import React, { useState } from "react";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSelectTopic = (selectedTopic) => {
    if (selectedTopics.includes(selectedTopic)) {
      setSelectedTopics(
        selectedTopics.filter((topic) => topic !== selectedTopic)
      );
      return;
    }
    setSelectedTopics([...selectedTopics, selectedTopic]);
  };
  const toggleFavorites = (photoId) => {
    if (favorites.includes(photoId)) {
      // Remove the photoId from favorites
      const updatedFavorites = favorites.filter((favPhotoId) => favPhotoId !== photoId);
      setFavorites(updatedFavorites);
    } else {
      // Add the photoId to favorites
      setFavorites([...favorites, photoId]);
    }
  };
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
        selectedTopics={selectedTopics}
        onSelectTopic={handleSelectTopic}
        topics={topics}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        toggleFavorites={toggleFavorites}
        selectedTopics={selectedTopics}
        openModal={openModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          favorites = {favorites} // favorites to the modal
          toggleFavorites={toggleFavorites} //pass toggleFavortes function to the modal
        />
      )}
    </div>
  );
};

export default HomeRoute;
