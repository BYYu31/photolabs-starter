import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";

// mock data
import photos from "../mocks/photos";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { 
          favouriteList, // from HomeRoute
          updateFavouriteList, // from both
          setClickedPhoto, // from HomeRoute
          input // from Modal
        } = props;

  const photoRender = photos || Object.values(input);


  return (
    <ul className="photo-list">
      {photoRender.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            setClickedPhoto={setClickedPhoto}
            updateFavouriteList={updateFavouriteList}
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
