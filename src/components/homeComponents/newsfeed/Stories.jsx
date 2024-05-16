import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import listStories from "../../../data/StoriesList.json";

const Stories = () => {
  const [position, setPosition] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const space = 100;

  useEffect(() => {
    const storiesContainer = document.querySelector(".stories-container");
    const stories = document.querySelector(".stories");
    const containerWidth = storiesContainer.clientWidth;
    const storiesWidth = stories.scrollWidth;
    handleScroll(containerWidth, storiesWidth, position);
  }, [position]);

  const handleScroll = (containerWidth, storiesWidth, position) => {
    setShowLeftButton(position < 0);
    setShowRightButton(containerWidth - position < storiesWidth);
  };

  const styleStory = (urlImage) => {
    return {
      backgroundImage: `url(${urlImage})`,
      position: "relative",
      width: "130px",
      height: "200px",
      padding: "10px",
      borderRadius: "10px",
      color: "white",
      cursor: "pointer",
      flex: "0 0 auto",
    };
  };

  const handleScrollLeft = () => {
    setPosition((prev) => prev + space);
  };

  const handleScrollRight = () => {
    setPosition((prev) => prev - space);
  };

  return (
    <div className="stories-container" style={{ overflow: "hidden", position: "relative" }}>
      {showLeftButton && (
        <div className="scroll-btn left" onClick={handleScrollLeft} style={{ position: "absolute", left: 0 }}>
          <ArrowBackIosIcon />
        </div>
      )}
      {showRightButton && (
        <div className="scroll-btn right" onClick={handleScrollRight} style={{ position: "absolute", right: 0 }}>
          <ArrowForwardIosIcon />
        </div>
      )}
      <div className="stories" style={{ display: "flex", transform: `translateX(${position}px)`, transition: "transform 0.3s ease" }}>
        {listStories.map((story, index) => (
          <div key={index} className="story-box" style={styleStory(story.background)}>
            <Avatar alt={story.username} src={story.avatar} style={{ zIndex: "2", border: "3px solid white" }} />
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
