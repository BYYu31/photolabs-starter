import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton favouriteList={props.favouriteList} photo={props.photo}/>
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
