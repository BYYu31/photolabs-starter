import React, { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = (props) => {

  const [clickedPhoto, setClickedPhoto] = useState();
  const [favouriteList, setFavouriteList] = useState([]);
  const [newFavourite, setNewFavourite] = useState(false);

  // this is the function to close the modal
  const removeClickedPhoto = () => setClickedPhoto();

  // this is to update the favourite list
  const updateFavouriteList = photo => {
    if (favouriteList.includes(photo)) {
      setFavouriteList(prev => [...prev].filter(input => input !== photo));
      setNewFavourite(false);
    } else {
      setFavouriteList(prev => [...prev, photo]);
      setNewFavourite(true);
    }
  }

  const favouriteNumberLength = favouriteList.length;

  // use ApplicationData hook
  // const {
  //   clickedPhoto, //state
  //   setClickedPhoto, //fn
  //   choosePhoto, //fn
  //   favouriteList,
  //   setFavouriteList,
  //   newFavourite,
  //   setNewFavourite
  // } = useApplicationData();

  // superceded code
  // const choosePhoto = photo => setClickedPhoto(photo);

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute 
        setClickedPhoto={setClickedPhoto}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        updateFavouriteList={updateFavouriteList}
        newFavourite={newFavourite}
        setNewFavourite={setNewFavourite}
      />
      {clickedPhoto && 
      <PhotoDetailsModal 
        clickedPhoto={clickedPhoto} 
        removeClickedPhoto={removeClickedPhoto}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        updateFavouriteList={updateFavouriteList}
        newFavourite={newFavourite}
        setNewFavourite={setNewFavourite}
      />}
    </div>

  );
};

export default App;
