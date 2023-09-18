const { useState } = require("react");


export default function useApplicationData(initial) {

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