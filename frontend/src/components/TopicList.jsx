import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {

  const { topics, setTopicCategory } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return (
          <TopicListItem 
          key={topic.id}
          id={topic.id}
          label={topic.title}
          setTopicCategory={setTopicCategory}
          />
        ) 
      })}
    </div>
  );
};

export default TopicList;
