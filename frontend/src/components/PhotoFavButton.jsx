import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { 
          photo, 
          updateFavouriteList,
          finalList          
        } = props;

  console.log('this is the favouriteList vvvvvvv')
  console.log(finalList)
  console.log('this is the photo objectvvvvvvvvvv')
  console.log(photo)

  const includedInList = finalList.includes(photo) ? true : false;

  // const [favourite, setFavourite] = useState(false);
  
  // const toggleFavourite = () => setFavourite(!favourite)
  // also added onClick={toggleFavourite} superceded
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => updateFavouriteList(photo)}>
      <FavIcon selected={includedInList}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;