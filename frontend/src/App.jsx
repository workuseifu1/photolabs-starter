import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const {state} = useApplicationData();
  return (
    <div className='App'>      
      <HomeRoute photos={state.photoData} topics={state.topicData}/>
      <PhotoDetailsModal/>
    </div>
  );
};

export default App;
