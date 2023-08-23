import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './styles/PhotoListItem.scss';
// import './App.scss';
import PhotoListItem from './components/PhotoListItem';
const sampleDataForPhotoListItem = [{
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
},
{
  id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
},
{
  id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  liked: true
}
];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='app'>
      {sampleDataForPhotoListItem.map(photo => (
        <PhotoListItem key={photo.id} {...photo} />
      ))}
      {/* <PhotoListItem  {...sampleDataForPhotoListItem}/> */}
    </div>
  );
};

export default App;
