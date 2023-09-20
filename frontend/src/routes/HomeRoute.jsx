import React,  { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { 
          setClickedPhoto, 
          favouriteList, 
          setFavouriteList, 
          updateFavouriteList,
          newFavourite, 
          setNewFavourite
        } = props;

  // const [favouriteList, setFavouriteList] = useState([]);
  // const [newFavourite, setNewFavourite] = useState(false);

  return (
    <div className="home-route">
        <TopNavigation newFavourite={newFavourite} favouriteNumber={favouriteList.length}/>
        <PhotoList 
          finalList={favouriteList}
          updateFavouriteList={updateFavouriteList} 
          setClickedPhoto={setClickedPhoto}
        />
    </div>
  );
};

export default HomeRoute;
