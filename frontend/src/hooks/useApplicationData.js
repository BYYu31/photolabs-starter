import { useEffect, useReducer } from "react";

const initialState = {
  clickedPhoto: undefined,
  favouriteList: [],
  newFavourite: false,
  topicsData: [],
  photoData: [],
  topicCategory: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload};
    case 'SET_TOPIC_DATA':
      return { ...state, topicsData: action.payload};
    case "SET_CLICKED_PHOTO":
      return { ...state, clickedPhoto: action.payload };
    case "SET_TOPIC_CATEGORY":
      return { ...state, topicCategory: action.payload};
    case "SET_FAVOURITE_LIST":
      return { ...state, favouriteList: action.payload };
    case "SET_NEW_FAVOURITE":
      return { ...state, newFavourite: action.payload };
    case "REMOVE_CLICKED_PHOTO":
      return { ...state, clickedPhoto: undefined };
    case "UPDATE_FAVOURITE_LIST":
      const { photo } = action.payload;
      if (state.favouriteList.includes(photo.id)) {
        return {
          ...state,
          favouriteList: state.favouriteList.filter((input) => input !== photo.id),
          newFavourite: false,
        };
      } else {
        return {
          ...state,
          favouriteList: [...state.favouriteList, photo.id],
          newFavourite: true,
        };
      }
    default:
      return state;
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // render photo data && based on topic clicked
  useEffect(() => {
    let url = 'http://localhost:8001/api/photos'

    if (state.topicCategory) {
      url = 'http://localhost:8001/api/topics/photos' + `/${state.topicCategory}`
    }
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
  },[state.topicCategory])

  // render topic data
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: "SET_TOPIC_DATA", payload: data}))
  },[])

  return {
    clickedPhoto: state.clickedPhoto,
    setClickedPhoto: (photo) => {
      dispatch({ type: "SET_CLICKED_PHOTO", payload: photo });
    },
    topicCategory: state.topicCategory,
    setTopicCategory: category => {
      dispatch({ type: "SET_TOPIC_CATEGORY", payload: category});
    },
    favouriteList: state.favouriteList,
    setFavouriteList: (list) => {
      dispatch({ type: "SET_FAVOURITE_LIST", payload: list });
    },
    newFavourite: state.newFavourite,
    setNewFavourite: (newFav) => {
      dispatch({ type: "SET_NEW_FAVOURITE", payload: newFav });
    },
    removeClickedPhoto: () => {
      dispatch({ type: "REMOVE_CLICKED_PHOTO" });
    },
    updateFavouriteList: (photo) => {
      dispatch({ type: "UPDATE_FAVOURITE_LIST", payload: { photo } });
    },
    favouriteNumber: state.favouriteList.length,
    topics: state.topicsData,
    photos: state.photoData
  };
}
