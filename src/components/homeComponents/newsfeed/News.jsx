import "./NewsFeed.css"
import Stories from './Stories';
import PostStatus from './PostStatus';
import NewsContent from './NewsContent';

const News = () => {
  return (
    <div className="newfeed-container">
      <Stories/>
      <PostStatus/>
      <NewsContent/>
    </div>

  );
};

export default News;
