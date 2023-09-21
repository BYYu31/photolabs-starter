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
          setNewFavourite,
          topics,
          input
        
        } = props;

  // const [favouriteList, setFavouriteList] = useState([]);
  // const [newFavourite, setNewFavourite] = useState(false);

  return (
    <div className="home-route">
        <TopNavigation 
          newFavourite={newFavourite} 
          favouriteNumber={favouriteNumber}
          topics={topics}
        />
        <PhotoList 
          input={input}
          favouriteList={favouriteList}
          updateFavouriteList={updateFavouriteList} 
          setClickedPhoto={setClickedPhoto}
        />
    </div>
  );
};

export default HomeRoute;
