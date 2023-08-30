import React from "react";
import PhotoList from "components/PhotoList";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,
  openModal,
  favorites,
  toggleFavorites,
}) => {
  if (!selectedPhoto) {
    return null; // Return null if no photo is selected
  }
  const { urls, user, similar_photos } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        {/* Display larger version of the selected photo */}
        <img
          src={urls.full}
          alt={`Photo by ${user.username}`}
          className="photo-details-modal__image"
        />

        {/* Display similar photos */}
        {similar_photos && (
          <div className="photo-details-modal__similar-photos">
            {/* Reuse the PhotoList component to display similar photos */}
            <h2>Similar Photos</h2>
            <PhotoList
              favorites={favorites}
              toggleFavorites={toggleFavorites}
              photos={Object.values(similar_photos)}
              openModal={(photoId) => openModal(photoId)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
