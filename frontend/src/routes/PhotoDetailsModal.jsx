import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { 
          removeClickedPhoto, 
          clickedPhoto,
          favouriteList, 
          updateFavouriteList
        } = props;

  const { location, similar_photos, urls, user } = clickedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={removeClickedPhoto}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* <div className='photo-details-modal__top-bar'>
        <img src={urls.full} className='photo-details-modal__image'></img>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile}></img>
          <div className="photo-list__user-info">
            <div>{user.name}</div>
            <div className='photo-list__user-location'>{location.city + ', ' + location.country}</div>
          </div>
      </div>

        
      </div> */}

      <div className='photo-details-modal__top-bar'>
      <PhotoListItem 
        updateFavouriteList={updateFavouriteList}
        favouriteList={favouriteList}
        photo={clickedPhoto}
        clickedPhoto={clickedPhoto}
        imageSource={urls.full} 
        profile={user.profile} 
        username={user.name} 
        city={location.city} 
        country={location.country}
      />
      <div className='photo-details-modal__header'>Similar Photos</div>
      </div>

        <PhotoList className='photo-details-modal__images'
          clickedPhoto={clickedPhoto}
          input={similar_photos}
          updateFavouriteList={updateFavouriteList} 
          favouriteList={favouriteList}
        />
    </div>
  )
};

export default PhotoDetailsModal;
