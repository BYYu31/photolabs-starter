import React,  { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { 
          setClickedPhoto, 
          favouriteList, 
          setFavouriteList, 
          newFavourite, 
          setNewFavourite
        } = props;

  // const [favouriteList, setFavouriteList] = useState([]);
  // const [newFavourite, setNewFavourite] = useState(false);

  const updateFavouriteList = photo => {
    if (favouriteList.includes(photo)) {
      setFavouriteList(prev => [...prev].filter(input => input !== photo));
      setNewFavourite(false);
    } else {
      setFavouriteList(prev => [...prev, photo]);
      setNewFavourite(true);
    }
  }

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
