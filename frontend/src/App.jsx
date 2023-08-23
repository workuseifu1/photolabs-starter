import React from 'react';
// import TopicList from 'components/TopicList';
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
// import PhotoListItem from './components/PhotoListItem';
// import TopNavigation from 'components/TopNavigationBar';
// import TopNavigationBar from 'components/TopNavigationBar';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='App'>
      <HomeRoute/>
    </div>
  );
};

export default App;
