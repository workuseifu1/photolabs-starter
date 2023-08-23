import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';
import PhotoListItem from './components/PhotoListItem';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='app'>
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList />
    </div>
  );
};

export default App;
