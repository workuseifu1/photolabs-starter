import { useState, useEffect, useReducer } from "react";
const initialState = {
  //…rest of the state
  photoData: [],
  topicData: [],
  favorites:[]
}
// Define action types
const FAV_PHOTO_ADDED = "FAV_PHOTO_ADDED";
const FAV_PHOTO_REMOVED = "FAV_PHOTO_REMOVED";
const SELECT_PHOTO = "SELECT_PHOTO";
const CLOSE_PHOTO_MODAL = "CLOSE_PHOTO_MODAL";
const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";
const SET_PHOTO_DATA = "SET_PHOTO_DATA";
const SET_TOPIC_DATA = "SET_TOPIC_DATA";

// Define the reducer function
function reducer(state, action) {
  if (action.type === FAV_PHOTO_ADDED) {
    return { ...state, favorites: [...state.favorites, action.payload.id] };
  } else if (action.type === FAV_PHOTO_REMOVED) {
    return {
      ...state,
      favorites: state.favorites.filter((favPhotoId) => favPhotoId !== action.payload.id)
    };
  } else if (action.type === SELECT_PHOTO) {
    return { ...state, selectedPhoto: action.payload.photo };
  } else if (action.type === CLOSE_PHOTO_MODAL) {
    return { ...state, selectedPhoto: null };
  } else if (action.type === LOAD_INITIAL_DATA) {
    // Load initial data from action.payload and update the state
    return { ...state, ...action.payload };
  } else if (action.type === SET_PHOTO_DATA) {
    return { ...state, photoData: action.payload };
  }  else if (action.type === SET_TOPIC_DATA) {
    return { ...state, topicData: action.payload };
  }
  else {
    return state;
  }
}
function useApplicationData() {
  // const [state, setState] = useState({
  //   photos: [],
  //   topics: [],
  //   // ... other state properties
  // });
const [state,dispatch] = useReducer(reducer,initialState);
  const updateToFavPhotoIds = (photoId) => {
    if (state.favorites.includes(photoId)) {
      // const updatedFavorites = state.favorites.filter((favPhotoId) => favPhotoId !== photoId);
      dispatch({type:FAV_PHOTO_REMOVED, payload: {id: photoId}});
    } else {
      dispatch({type: FAV_PHOTO_ADDED, payload:{id:photoId}});
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({type:SELECT_PHOTO, payload: {photo}});
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({type: CLOSE_PHOTO_MODAL});
  };
  const fetchPhotosByTopic = (topicId) => {
    console.log('fetch photos by topic',topicId )
    return fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data =>dispatch({ type: SET_PHOTO_DATA, payload: data }));
  };
  // Load initial data from API
  
  useEffect(() => {
    // Fetch photos, topics, etc. from API and set the state
     fetch('/api/photos')
     .then(response => response.json())
     .then(data =>dispatch({ type: SET_PHOTO_DATA, payload: data }))
     fetch('/api/topics')
     .then(response => response.json())
     .then(data =>dispatch({ type: SET_TOPIC_DATA, payload: data }))
    // Example: fetchTopics().then((topics) => setState((prev) => ({ ...prev, topics })));
  }, []);

  return {
    state,
    fetchPhotosByTopic,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}

export default useApplicationData;