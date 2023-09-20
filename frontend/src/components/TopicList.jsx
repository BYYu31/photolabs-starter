import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// mock data
import topics from "mocks/topics";

const listOfTopic = topics.map(topic => {
  return (
    <TopicListItem 
      key={topic.id}
      label={topic.title}
    />
  )
})

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {listOfTopic}
    </div>
  );
};

export default TopicList;
