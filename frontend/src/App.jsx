import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [ clickedPhoto, setClickedPhoto ] = useState();

  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute photoSelected={photo => setClickedPhoto(photo)}/>
      {clickedPhoto && <PhotoDetailsModal removeClickedPhoto={() => setClickedPhoto()}/>}
    </div>

  );
};

export default App;
