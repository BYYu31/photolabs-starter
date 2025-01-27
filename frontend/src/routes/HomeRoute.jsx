import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { 
          setClickedPhoto, 
          favouriteList, 
          favouriteNumber,
          updateFavouriteList,
          newFavourite, 
          topics,
          input,
          setTopicCategory        
        } = props;

  return (
    <div className="home-route">
        <TopNavigation 
          newFavourite={newFavourite} 
          favouriteNumber={favouriteNumber}
          topics={topics}
          setTopicCategory={setTopicCategory}
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
