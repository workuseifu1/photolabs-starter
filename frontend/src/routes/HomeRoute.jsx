import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
