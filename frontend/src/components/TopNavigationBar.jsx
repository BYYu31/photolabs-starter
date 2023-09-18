import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { newFavourite, favouriteNumber } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
      <FavBadge isFavPhotoExist={newFavourite} favouriteNumber={favouriteNumber}/>
    </div>
    
  )
}

export default TopNavigation;