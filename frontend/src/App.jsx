import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';


// data
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// array of photo components

// const photosObject = new Array(3).fill(sampleDataForPhotoListItem
//   );

// const listOfPhoto = photosObject.map((photo, index) => {
//   return (
//     <PhotoListItem 
//       key={index} 
//       imageSource={photo.imageSource} 
//       username={photo.username}
//       profile={photo.profile}
//       city={photo.location.city}
//       country={photo.location.country}
//       favBool={false}
//       />
//   )
// })

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {listOfPhoto} */}
      <HomeRoute/>
    </div>

  );
};

export default App;
