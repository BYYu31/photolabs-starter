import React from "react";

import "../styles/PhotoListItem.scss";

// moved to App.jsx
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

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile}></img>
        <div className="photo-list__user-info">
          <div>{props.username}</div>
          <div className='photo-list__user-location'>{props.city + ', ' + props.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
