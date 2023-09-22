import React, { useState } from 'react';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = (props) => {

  // use ApplicationData hook
  const {
    clickedPhoto,
    setClickedPhoto,
    favouriteList,
    setFavouriteList,
    setTopicCategory,
    newFavourite,
    setNewFavourite,
    removeClickedPhoto,
    updateFavouriteList,
    favouriteNumber,
    topics,
    photos
  } = useApplicationData();

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute 
        input={photos}
        setClickedPhoto={setClickedPhoto}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        updateFavouriteList={updateFavouriteList}
        newFavourite={newFavourite}
        setNewFavourite={setNewFavourite}
        favouriteNumber={favouriteNumber}
        topics={topics} // data from mock
        setTopicCategory={setTopicCategory}
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
