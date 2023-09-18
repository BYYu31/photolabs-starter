import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ clickedPhoto, setClickedPhoto ] = useState();

  const modalDisplayPhoto = photo => {
    setClickedPhoto(photo);
  }

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute photoSelected={modalDisplayPhoto}/>
      {clickedPhoto && <PhotoDetailsModal/>}
    </div>

  );
};

export default App;
