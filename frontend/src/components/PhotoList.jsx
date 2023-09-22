import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const { 
          favouriteList, // from both
          updateFavouriteList, // from both
          clickedPhoto, // from both
          setClickedPhoto, // from HomeRoute
          input // takes either similar_photos or photos from api
        } = props;

  const photoRender = Object.values(input);

  return (
    <ul className="photo-list">
      {photoRender.map(photo => {
        return (
          <PhotoListItem
            key={photo.id}
            clickedPhoto={clickedPhoto}
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
