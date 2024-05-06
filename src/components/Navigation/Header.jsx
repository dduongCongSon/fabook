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
// import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import {Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
    <div className='header'>
      <div className="header-search" >
          <div id='icon-search'><FacebookIcon/></div>
          <div className='searchbox'>
            <div><SearchIcon/></div>
            <input id='box-search' type="text" placeholder="Tìm kiếm trên Facebook"/>
          </div>
          
      </div>
      <div className="header-icon">
          <ul className='icon'>
              <li><Link to={"/"}><HomeIcon/></Link></li>
              <li><Link to={"/videos"}><AirplaySharpIcon/></Link></li>
              <li><Link to={"/market"}><StorefrontSharpIcon/></Link></li>
              <li><Link to={"/groups"}><Groups2SharpIcon/></Link></li>
              <li><Link to={"/games"}><VideogameAssetSharpIcon/></Link></li>
          </ul>
      </div>
      <div className="header-alert">
          <button id='menu'><ListSharpIcon/></button>
          <button id='mess'><ChatBubbleSharpIcon/></button>
          <button id='notification'><AddAlertSharpIcon/></button>
          {/* <button id='profile'><AccountBoxSharpIcon/></button> */}
          <button id='profile'>
              <img src="https://unsplash.com/photos/brown-snake-on-brown-textile-CbhLFNtPGPs" alt="Description of image"/>
          </button>
      </div>
    </div>
    </>
  )
}

export default Header