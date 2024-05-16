import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HistoryIcon from '@mui/icons-material/History';
import PendingIcon from '@mui/icons-material/Pending';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';


import * as React from 'react';


const listMenu = [
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
    item: StorefrontIcon,
    content: 'Market',
    class: "marketicon",
  },
  {
    id: 6,
    item: GroupsIcon,
    content: 'Groups',
    class: "groupsicon",
  },
]



const Left = ({ listShortcut }) => {
  console.log(listShortcut)
  const initNumberList = 3;
  const [dataList, setDataList] = React.useState(listMenu);
  const [dataPage, setDataPage] = React.useState(listShortcut);
  const [numberList, setNumberList] = React.useState(initNumberList);
  const [numberPage, setNumberPage] = React.useState(initNumberList);
  const handleShow =() => { 
    setNumberList(listMenu.length);
  }
  const handleHide =() =>{
    setNumberList(initNumberList);
  }

  React.useEffect(() => {
    setDataList(listMenu.slice(0, numberList));
    setDataPage(listShortcut.slice(0, numberPage));
    }, [numberList,numberPage]);

  // const menuVisibleItems = showAll ? listMenu : listMenu.slice(0, initNumberList); setNumberPages (likePAge.length);
  // const shortcutVisibleItems = showAll ? listShortcut : listShortcut.slice(0, initNumberList);
  return (
    <div className="leftHome-container">
      <div className="topLeft">
        <ul>
          {dataList.map((menuItem) => (
            <li key={menuItem.id} className={`list ${menuItem.class}`}>
              <menuItem.item />
              <span>{menuItem.content}</span>
            </li>
          ))}
        </ul>
        <button className='btn-seeMore' onClick={()=>{
        {
          numberList === initNumberList && handleShow();
        }
        {
          numberList === listMenu.length && handleHide();
        }
        }}>
          <span >{numberList === initNumberList ? "See more" : "Hide"}</span>
          <span><PendingIcon /></span>
        </button>
      </div>
      <div className="botLeft">
        <div className='description'>
          <span>My shortcut </span>
        </div>
        <div className='List-page'>
          <ul>
            {dataPage.map((shortcutItem) => (
              <li key={shortcutItem.id} className={`list ${shortcutItem.class}`}>
                <img src={shortcutItem.image} className='image' />
                <span>{shortcutItem.pageName}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className='btn-seeMore' onClick={()=>{
          {
            numberPage === initNumberList &&
              setNumberPage(listShortcut.length);
          }
          {
            numberPage === listShortcut.length &&
              setNumberPage(initNumberList);
          }
        }}>
          <span >{numberPage === initNumberList ? "See more" : "Hide"}</span>
          <span><PendingIcon /></span>
        </button>
      </div>
    </div>
  )
}

export default Left