import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import newFeedList from'../../../data/NewFeedList.json';

const NewsContent = () => {
  return (
    <div className="newFeed-container">
      {newFeedList.map((post) => (
        <div className="newfeed-card" key={post.id}>
          <div className="info-user">
            <div className="left">
              <div className="avt-user"><Avatar alt="" src={post.avatar} /></div>
              <div className="info-box">
                <div className="name-user">{post.username}
                  <span className="description"> </span>
                </div>
                <div className="info-datetime">{post.time}</div>
              </div>
            </div>
            <div className="right"><MoreHorizIcon/></div>
          </div>
          <p className='news-content'>{post.post}</p>
          <div className='picture'>
            <img src={post.postImage} alt="Picture" className='newfeed-image' />
          </div>
          <div className='reac-information'><InsertEmoticonIcon/>
              <div>Cong Son and 181 others</div>
            </div>
            <div className="news-reac">
              <div><ThumbUpOffAltIcon/></div>
              <div><ChatBubbleOutlineIcon/></div>
              <div><ScheduleSendOutlinedIcon/></div>
            </div>
            <div className='news-comment'></div>
        </div>
      ))}
    </div>
  )
}

export default NewsContent