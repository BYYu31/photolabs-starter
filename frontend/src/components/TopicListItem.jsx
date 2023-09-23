import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const {
          label,
          id,
          setTopicCategory
        } = props;

  return (
    <div className="topic-list__item">
      <div onClick={() => setTopicCategory(id)}><span>{label}</span></div>
    </div>
  );
};

export default TopicListItem;
