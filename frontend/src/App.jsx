import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ clickedPhoto, setClickedPhoto ] = useState();

  const choosePhoto = photo => setClickedPhoto(photo);

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute photoSelected={choosePhoto}/>
      {clickedPhoto && <PhotoDetailsModal photoSelected={clickedPhoto} removeClickedPhoto={() => setClickedPhoto()}/>}
    </div>

  );
};

export default App;
