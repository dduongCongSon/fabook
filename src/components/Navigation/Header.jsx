// Header
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import HomeIcon from '@mui/icons-material/Home';
import AirplaySharpIcon from '@mui/icons-material/AirplaySharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import VideogameAssetSharpIcon from '@mui/icons-material/VideogameAssetSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import AddAlertSharpIcon from '@mui/icons-material/AddAlertSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';


// import Image from '../../assets/1337222.jpeg'
// import {Link} from "react-router-dom";
import "./Header.css";
const Header = () => {

  const listIcon = [
    {
      id: 1,
      item: HomeIcon,
      class: "homeicon",
    },
    {
      id: 2,
      item: AirplaySharpIcon ,
      class: "videoicon",
    },
    {
      id: 3,
      item: StorefrontSharpIcon ,
      class: "storeicon",
    },
    {
      id: 4,
      item: Groups2SharpIcon ,
      class: "groupicon",
    },
    {
      id: 5,
      item: VideogameAssetSharpIcon ,
      class: "extendsionicon",
    },
  ]

  
  return (
    <>
    <div className='header-container'>
      <div className="header-search" >
          <div id='icon-fabook'><FacebookIcon/></div>
          <div className='searchbox'>
            <div><SearchIcon/></div>
            <input id='box-search' type="text" placeholder="Tìm kiếm trên Facebook"/>
          </div>
          
      </div>
      <div className="header-icon">
          <ul>
          {listIcon.map((icon) => (
            <li key={icon.id} className={`list ${icon.class}`}>
              <icon.item />
            </li>
          ))}
          </ul>
      </div>
      <div className="header-alert">
          <button id='menu'><ListSharpIcon/></button>
          <span>4</span>
          <button id='mess'><ChatBubbleSharpIcon/></button>
          <span>3</span>
          <button id='notification'><AddAlertSharpIcon/></button>
          <span>1</span>
          <button id='profile'><AccountBoxSharpIcon/></button>
          {/* <button id='profile'>
              <img src= {Image}/>
          </button> */}
      </div>
    </div>

    </>
  )
}

export default Header