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
// menu
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HistoryIcon from '@mui/icons-material/History';
import PendingIcon from '@mui/icons-material/Pending';
// shortcut
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import CalculateIcon from '@mui/icons-material/Calculate';
import HtmlIcon from '@mui/icons-material/Html';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
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

  const listMenu =[
    {
      id: 1,
      item: PeopleIcon,
      content: 'Friend',
      class: "friendicon",
    },
    {
      id: 2,
      item: BookmarkIcon,
      content: 'Saved',
      class: "savedicon",
    },
    {
      id: 3,
      item: ChatBubbleIcon,
      content: 'Messsage',
      class: "messsageicon",
    },
    {
      id: 4,
      item: HistoryIcon,
      content: 'Memory',
      class: "memoryicon",
    },
    {
      id: 5,
      item: PendingIcon,
      content: 'Show More',
      class: "showmoreicon",
    },
  ]

  const listShortcut =[
    {
      id: 1,
      item: DirectionsCarIcon,
      content: 'Troll Xe',
      class: "trollxeicon",
    },
    {
      id: 2,
      item: PetsIcon,
      content: 'Animal',
      class: "animalicon",
    },
    {
      id: 3,
      item: CalculateIcon,
      content: 'Love Math',
      class: "lovemathicon",
    },
    {
      id: 4,
      item: HtmlIcon,
      content: 'HTML Comunity',
      class: "htmlcomunityicon",
    },
    {
      id: 5,
      item: SportsKabaddiIcon,
      content: 'NBA Game',
      class: "nbagameicon",
    },
    {
      id: 6,
      item: PendingIcon,
      content: 'Show More',
      class: "showmoreicon",
    },
  ]
  
  return (
    <>
    <div className='header'>
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
    <div className='body-container'>
      <div className='body-menu'>
      <ul>
        {listMenu.map((menuItem) => (
          <li key={menuItem.id} className={`list ${menuItem.class}`}>
            <menuItem.item /> 
            <span>{menuItem.content}</span> 
          </li>
        ))}
      </ul>
      </div>
      <div className='body-shortcut'>
        <div>My shortcut </div>
        <ul>
          {listShortcut.map((shortcutItem) => (
            <li key={shortcutItem.id} className={`list ${shortcutItem.class}`}>
              <shortcutItem.item /> 
              <span>{shortcutItem.content}</span> 
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header