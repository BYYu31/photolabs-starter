import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  const { isFavPhotoExist, favouriteNumber } = props;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={favouriteNumber}/>
    </div>
  ) 
};

export default FavBadge;