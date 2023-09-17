import React,  { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [favouriteList, setFavouriteList] = useState([]);

  const updateFavouriteList = photo => {
    if (favouriteList.includes(photo)) {
      setFavouriteList((prev) => {
        const index = prev.indexOf(photo);
        const newFavouriteList = prev.splice(index, 1);
        return newFavouriteList;
      })
    } else {
      setFavouriteList(prev => {
        const newFavouriteList = [...prev, photo];
        return newFavouriteList;
      })
    }
  }

  return (
    <div className="home-route">
        <TopNavigation/>
        <PhotoList favouriteList={updateFavouriteList}/>
    </div>
  );
};

export default HomeRoute;
