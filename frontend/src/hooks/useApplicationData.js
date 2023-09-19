import { useState } from "react";
export default function useApplicationData() {

  const [clickedPhoto, setClickedPhoto] = useState();
  const [favouriteList, setFavouriteList] = useState([]);
  const [newFavourite, setNewFavourite] = useState(false);

  const choosePhoto = photo => setClickedPhoto(photo);

  return {
    clickedPhoto,
    setClickedPhoto,
    choosePhoto,
    favouriteList,
    setFavouriteList,
    newFavourite,
    setNewFavourite
  }
}

// import react, { useReducer } from 'react';

// const initialState = {
//   clickedPhoto: undefined,
//   favouriteList: [],
//   newFavourite: false
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_CLICK_PHOTO":
//       return {...state, clickedPhoto: action.payload}
//     case "SET_FAVOURITE_LIST":
//       return {...state, favouriteList: action.payload}
//     case "SET_NEW_FAVOURITE":
//       return {...state, newFavourite: action.payload}
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
// }

// export default function useApplicationData() {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const choosePhoto = photo => dispatch({ type: "SET_CLICK_PHOTO", payload: photo});

//   return {
//     clickedPhoto: state.clickedPhoto,
//     setClickedPhoto: photo => dispatch({ type: "SET_CLICK_PHOTO", payload: photo}),
//     choosePhoto,
//     favouriteList: state.favouriteList,
//     setFavouriteList: list => dispatch({ type: "SET_FAVOURITE_LIST", payload: list}),
//     newFavourite: state.newFavourite,
//     setNewFavourite: newFav => dispatch({ type: "SET_NEW_FAVOURITE", payload: newFav})
//   }
// }
