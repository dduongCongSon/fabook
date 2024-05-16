import React from 'react'
import Avatar from '@mui/material/Avatar';

import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const listExtention = [
  {
    id: 1,
    text: "Photo/Video",
    icon: ImageIcon,
    color: "blue",
  },
  {
    id: 2,
    text: "Tag Friend",
    icon: PersonAddIcon,
    color: "green",
  },
  {
    id: 3,
    text: "Feeling Activity",
    icon: EmojiEmotionsIcon,
    color: "yellow",
  },
];
const PostStatus = () => {
  return (
    <div className='postStatus-container'>
      <div className='postInput'>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <input type="text" placeholder="What's on your mind?" className='input' />
      </div>
      <div className='postExtension'>
        {listExtention.map(file =>(
          <div key={file.id} className='icon'>
            <file. icon style={{ color: `${file.color}`}} />
            <span>{file.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostStatus