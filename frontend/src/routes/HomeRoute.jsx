import React,  { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { 
          setClickedPhoto, 
          favouriteList, 
          favouriteNumber,
          setFavouriteList, 
          updateFavouriteList,
          newFavourite, 
          setNewFavourite
        } = props;

  // const [favouriteList, setFavouriteList] = useState([]);
  // const [newFavourite, setNewFavourite] = useState(false);

  return (
    <div className="home-route">
        <TopNavigation newFavourite={newFavourite} favouriteNumber={favouriteNumber}/>
        <PhotoList 
          favouriteList={favouriteList}
          updateFavouriteList={updateFavouriteList} 
          setClickedPhoto={setClickedPhoto}
        />
    </div>
  );
};

export default HomeRoute;
