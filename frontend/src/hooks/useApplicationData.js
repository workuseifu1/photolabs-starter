import {useEffect, useReducer } from "react";
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
const [state,dispatch] = useReducer(reducer,initialState);
  const updateToFavPhotoIds = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({type:FAV_PHOTO_REMOVED, payload: {id: photoId}});
    } else {
      dispatch({type: FAV_PHOTO_ADDED, payload:{id:photoId}});
    }
  };
  
  const fetchPhotosByTopic = (topicId) => {
    return fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data =>dispatch({ type: SET_PHOTO_DATA, payload: data }));
  };
  // Load initial data from API
  
  useEffect(() => {
     fetch('/api/photos')
     .then(response => response.json())
     .then(data =>dispatch({ type: SET_PHOTO_DATA, payload: data }))
     fetch('/api/topics')
     .then(response => response.json())
     .then(data =>dispatch({ type: SET_TOPIC_DATA, payload: data }))
  }, []);

  return {
    state,
    fetchPhotosByTopic,
    updateToFavPhotoIds,
  };
}

export default useApplicationData;