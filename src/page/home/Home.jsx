import Left from "../../components/homeComponents/Left"
import Right from "../../components/homeComponents/Right"
import News from "../../components/homeComponents/News"
import listShortcut from '../../data/LikePages.json'
import "./Home.css";

const Home = () => {
  return (
    <div className="body-container">
        <Left listShortcut={listShortcut} />
        <Right/>
        <News/>
    </div>
  )
}

export default Home