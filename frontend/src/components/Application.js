import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import "../styles/HomeRoute.scss";

export default function Application(props) {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar
        isFavPhotoExist={state.favorites.length > 0}
        selectedTopics={state.selectedTopics}
        onSelectTopic={handleSelectTopic}
        topics={state.topics}
      />
      <PhotoList
        photos={state.photos}
        favorites={state.favorites}
        toggleFavorites={updateToFavPhotoIds}
        selectedTopics={state.selectedTopics}
        openModal={setPhotoSelected}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
        />
      )}
    </div>
  );
}