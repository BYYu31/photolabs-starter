import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {

  const { removeClickedPhoto, photoSelected } = props;

  const { location, similar_photos, urls, user } = photoSelected;

  console.log(`similar photos are:`);
  console.log(similar_photos)

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={removeClickedPhoto}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <img src={urls.full} className='photo-details-modal__image'></img>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile}></img>
          <div className="photo-list__user-info">
            <div>{user.name}</div>
            <div className='photo-list__user-location'>{location.city + ', ' + location.country}</div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
      </div>

      <PhotoList input={similar_photos}/>
    </div>
  )
};

export default PhotoDetailsModal;
