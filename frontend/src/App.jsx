import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
// TODO put tpoics

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='App'>
      
      <HomeRoute photos= {photos}/>
    </div>
  );
};

export default App;
