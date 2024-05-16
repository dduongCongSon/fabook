import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';

const text = () => {
  return (
    <div className='new-container'>
      <div className='story-container'>
        <div>
          <div className="story-card">
            <span className='story-avt'><AccountCircleIcon /></span>
          </div>
        </div>
        <div>
          <div className="story-card">
            <span className='story-avt'><AccountCircleIcon /></span>
          </div>
        </div>
        <div>
          <div className="story-card">
            <span className='story-avt'><AccountCircleIcon /></span>
          </div>
        </div>
        <div>
          <div className="story-card">
            <span className='story-avt'><AccountCircleIcon /></span>
          </div>
        </div>
      </div>
      <div className="status-container">
        <div className="news-card">
          <div className="image">
            <span class="text">This is a chair.
            </span>
          </div>
          <div className='news-description'>Bai 1</div>
          <div className='news-information'><InsertEmoticonIcon/>
            <div>Cong Son and 1821 others</div>
          </div>
          <div className="news-reac">
            <div><ThumbUpOffAltIcon/></div>
            <div><ChatBubbleOutlineIcon/></div>
            <div><ScheduleSendOutlinedIcon/></div>
          </div>
          <div className='news-comment'></div>
        </div>
        <div className="news-card">
          <div className="image">
            <span class="text">Beautiful Ho ny.
            </span>
          </div>
          <div className='news-description'>mySunshine</div>
          <div className='news-information'><InsertEmoticonIcon/>
            <div>Cong Son and 183 others</div>
          </div>
          <div className="news-reac">
            <div><ThumbUpOffAltIcon/></div>
            <div><ChatBubbleOutlineIcon/></div>
            <div><ScheduleSendOutlinedIcon/></div>
          </div>
          <div className='news-comment'></div>
        </div>
        <div className="news-card">
          <div className="image">
            <span class="text">Hepl me et o et.
            </span>
          </div>
          <div className='news-description'>Cuu roi toi khoi PRJ</div>
          <div className='news-information'><InsertEmoticonIcon/>
            <div>Cong Son and 821 others</div>
          </div>
          <div className="news-reac">
            <div><ThumbUpOffAltIcon/></div>
            <div><ChatBubbleOutlineIcon/></div>
            <div><ScheduleSendOutlinedIcon/></div>
          </div>
          <div className='news-comment'></div>
        </div>
        <div className="news-card">
          <div className="image">
            <span class="text">SaiGon.
            </span>
          </div>
          <div className='news-description'>Longtimenosee</div>
          <div className='news-information'><InsertEmoticonIcon/>
            <div>Cong Son and 181 others</div>
          </div>
          <div className="news-reac">
            <div><ThumbUpOffAltIcon/></div>
            <div><ChatBubbleOutlineIcon/></div>
            <div><ScheduleSendOutlinedIcon/></div>
          </div>
          <div className='news-comment'></div>
        </div>

      </div>
    </div>

  )
}

export default text