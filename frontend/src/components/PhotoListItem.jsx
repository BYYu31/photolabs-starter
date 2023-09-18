import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  const { photo, photoSelected, favouriteList, imageSource, username, profile, city, country } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton favouriteList={favouriteList} photo={photo}/>
      <img className="photo-list__image" src={imageSource} onClick={() => photoSelected(photo)}></img>
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
