import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [clickedPhoto, setClickedPhoto] = useState();
  const [favouriteList, setFavouriteList] = useState([]);
  const [newFavourite, setNewFavourite] = useState(false);


  const choosePhoto = photo => setClickedPhoto(photo);

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute 
        photoSelected={choosePhoto}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        newFavourite={newFavourite}
        setNewFavourite={setNewFavourite}
      />
      {clickedPhoto && 
      <PhotoDetailsModal 
        photoSelected={clickedPhoto} 
        removeClickedPhoto={() => setClickedPhoto()}
        favouriteList={favouriteList}
        setFavouriteList={setFavouriteList}
        newFavourite={newFavourite}
        setNewFavourite={setNewFavourite}
      />}
    </div>

  );
};

export default App;
