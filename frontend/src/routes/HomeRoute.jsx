import React, { useState, useEffect} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({photos}) => {
  const [favorites,setFavorites] = useState([]);
const toggleFavorites = (photoId) => {
  if(favorites.includes(photoId)) {
    const copyFavorites = [...favorites].filter(favPhotoId => favPhotoId !== photoId)
    setFavorites(copyFavorites)
    return 
  }
  setFavorites(prev => [...prev, photoId])
}

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist = {favorites.length > 0}/>
      <PhotoList  photos ={photos} favorites={favorites} toggleFavorites={toggleFavorites}/>
    </div>
  );
};

export default HomeRoute;
