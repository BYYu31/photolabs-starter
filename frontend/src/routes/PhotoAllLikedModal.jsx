import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoAllLikedModal = (props) => {

  const { 
          setDisplayAllLiked, 
          clickedPhoto,
          favouriteList, 
          updateFavouriteList
        } = props;

  //const { location, similar_photos, urls, user } = clickedPhoto;

  return (
      <div className='photo-details-modal'>
        <PhotoList className='photo-details-modal__images'
          input={favouriteList}
          updateFavouriteList={updateFavouriteList} 
          favouriteList={favouriteList}
      />
      </div>
  )
};

export default PhotoAllLikedModal;
