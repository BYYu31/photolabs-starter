// import { useState } from "react";
// export default function useApplicationData() {

//   const [clickedPhoto, setClickedPhoto] = useState();
//   const [favouriteList, setFavouriteList] = useState([]);
//   const [newFavourite, setNewFavourite] = useState(false);

//   // this is the function to close the modal
//   const removeClickedPhoto = () => setClickedPhoto();

//   // this is to update the favourite list
//   const updateFavouriteList = photo => {
//     if (favouriteList.includes(photo)) {
//       setFavouriteList(prev => [...prev].filter(input => input !== photo));
//       setNewFavourite(false);
//     } else {
//       setFavouriteList(prev => [...prev, photo]);
//       setNewFavourite(true);
//     }
//   }

//   const favouriteNumber = favouriteList.length;

//   return {
//     clickedPhoto,
//     setClickedPhoto,
//     favouriteList,
//     setFavouriteList,
//     newFavourite,
//     setNewFavourite,
//     removeClickedPhoto,
//     updateFavouriteList,
//     favouriteNumber    
//   }
// }

import { useReducer } from "react";

const initialState = {
  clickedPhoto: undefined,
  favouriteList: [],
  newFavourite: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CLICKED_PHOTO":
      return { ...state, clickedPhoto: action.payload };
    case "SET_FAVOURITE_LIST":
      return { ...state, favouriteList: action.payload };
    case "SET_NEW_FAVOURITE":
      return { ...state, newFavourite: action.payload };
    case "REMOVE_CLICKED_PHOTO":
      return { ...state, clickedPhoto: undefined };
    case "UPDATE_FAVOURITE_LIST":
      const { photo } = action.payload;
      if (state.favouriteList.includes(photo)) {
        return {
          ...state,
          favouriteList: state.favouriteList.filter((input) => input !== photo),
          newFavourite: false,
        };
      } else {
        return {
          ...state,
          favouriteList: [...state.favouriteList, photo],
          newFavourite: true,
        };
      }
    default:
      return state;
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    clickedPhoto: state.clickedPhoto,
    setClickedPhoto: (photo) => {
      dispatch({ type: "SET_CLICKED_PHOTO", payload: photo });
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
  };
}
