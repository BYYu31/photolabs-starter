import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  const { 
          photo, 
          setClickedPhoto, 
          updateFavouriteList, 
          finalList,
          imageSource, 
          username, 
          profile,
          city, 
          country 
        } = props;

  return (
    <div className="photo-list__item">
      {<PhotoFavButton 
        updateFavouriteList={updateFavouriteList} 
        finalList={finalList}
        photo={photo}
      />}
      {<img className="photo-list__image" src={imageSource} onClick={() => setClickedPhoto(photo)}></img>}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}></img>
        <div className="photo-list__user-info">
          <div>{username}</div>
          <div className='photo-list__user-location'>{city + ', ' + country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
