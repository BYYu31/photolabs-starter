import React from "react";
import PhotoListItem from "./PhotoListItem";

// mock data
import photos from "../mocks/photos";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { favouriteList, photoSelected } = props;

  return (
    <ul className="photo-list">
      {photos.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            photoSelected={photoSelected}
            favouriteList={favouriteList}
            imageSource={photo.urls.full}
            username={photo.user.username}
            profile={photo.user.profile}
            city={photo.location.city}
            country={photo.location.country}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;
