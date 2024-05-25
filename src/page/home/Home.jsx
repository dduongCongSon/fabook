import { useEffect, useState } from "react";
import Left from "../../components/homeComponents/Left";
import Right from "../../components/homeComponents/Right";
import News from "../../components/homeComponents/newsfeed/News";
// import News from "../../components/homeComponents/newsfeed/News"
import listShortcut from "../../data/LikePages.json";
import "./Home.css";
import { getUser } from "../../apis/userRequest";
import { useDispatch } from "react-redux";
import { getDataUser } from "../../redux/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  useEffect(() => {
    dispatch(getDataUser)
  }, []);
  return (
    <div className="body-container">
      <Left listShortcut={listShortcut} />
      <News />
      <Right />
    </div>
  );
};

export default Home;
