import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { 
          photo, 
          clickedPhoto,
          setClickedPhoto, 
          updateFavouriteList, 
          favouriteList,
          imageSource, 
          username, 
          profile,
          city, 
          country 
        } = props;

        const clickedOrNot = clickedPhoto && photo.id === clickedPhoto.id

  return (
    <div className={clickedOrNot ? "photo-list__item-modal" : "photo-list__item"}>
      {<PhotoFavButton 
        updateFavouriteList={updateFavouriteList} 
        favouriteList={favouriteList}
        photo={photo}
      />}
      {<img className={clickedOrNot ? "photo-list__image-modal" : "photo-list__image"} src={imageSource} onClick={() => setClickedPhoto(photo)}></img>}
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
