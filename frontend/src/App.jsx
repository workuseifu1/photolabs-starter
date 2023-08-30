import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const { state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic} = useApplicationData();
  return (
    <div className='App'>      
      <HomeRoute handleSelectTopic={fetchPhotosByTopic} 
      toggleFavorites={updateToFavPhotoIds}
       photos={state.photoData} 
       topics={state.topicData} 
       favorites={state.favorites}/>
      <PhotoDetailsModal/>
    </div>
  );
};

export default App;
