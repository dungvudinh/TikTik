import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { Menu} from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { InboxIcon, MessageIcon, PlusIcon, LiveIcon, LangIcon, FeedbackIcon, KeyboardIcon, ModeIcon, UserIcon, FlagIcon, TiktokCoinIcon, SettingIcon, LogoutIcon} from "~/assets/icons";
import avatar from "~/avatar.jpeg";
import Button from "~/components/Button";
import Image from "~/components/Images";
import Search from "../Search";
const cx = classNames.bind(styles);

//fake history 
const history = ["Đặng Thu Hà", "Duy Thẩm Schannel", "Mộc Thảo"]
const trends = [
    {
        title:'Vẽ Anime', 
        search:'130972', 
    },
    {
        title: "Cách vẽ hình cute", 
        search:'127546', 
    },
    {
        title: "Vụ cháy chung cư ở thanh xuân", 
        search:'112674', 

    },
    {
       title: "cách vẽ doodle", 
       search:'97648',  
    }, 
    {
        title: "cách vẽ tranh trắng đen đẹp", 
        search:'76113',  
     }
];
const MENU_ITEMS = [
    {
        icon: <UserIcon />, 
        title:'View profile', 
        to:'/', 
        requireLogin:true,
    }, 
    {
        icon: <FlagIcon />, 
        title:'Favorites', 
        to:'/', 
        requireLogin:true,
    }, 
    {
        icon: <TiktokCoinIcon />, 
        title:'Get Coins', 
        to:'/', 
        requireLogin:true,
    }, 
    {
        icon: <LiveIcon />, 
        title:'LIVE Creator Hub', 
        to:'/', 
        requireLogin:false,
    }, 
    {
        icon: <SettingIcon />, 
        title:'Settings', 
        to:'/', 
        requireLogin:true,
    }, 
    {
        icon: <LangIcon />, 
        title:'English', 
        children:{
            title:'Language', 
            data:[
                {
                    code:'en', 
                    title:'English'
                }, 
                {
                    code:'vi', 
                    title:'Tiếng Việt'
                }
            ]
        }, 
        requireLogin:false,
    }, 
    {
        icon: <FeedbackIcon />, 
        title:'Feedback and help', 
        to:'/feedback', 
        requireLogin:false,
    }, 
    {
        icon: <KeyboardIcon />, 
        title:'Keyboard shortcut', 
        requireLogin:false
    }, 
    {
        icon: <ModeIcon />, 
        title:'Dark mode', 
        requireLogin:false
    }, 
    {
        icon: <LogoutIcon />, 
        title:'Log out', 
        to:'/', 
        separate: true, 
        requireLogin:true
    }, 
]
function Header()
{
    const [loginStatus ,setLoginStatus] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult]  = useState([]);
    const [menuItems, setMenuItems] = useState(()=>loginStatus ? MENU_ITEMS : MENU_ITEMS.filter(menuItem=>menuItem.requireLogin === false))
    useEffect(()=>
    {
        trends.sort((a, b)=> a-b);
    }, [])
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setSearchResult([1,2,3])
        }, 1000)
    },[])
    return (
        <header className ={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <img src={images.logo} alt="" className={cx('.logo')}/>
                </div>
                <div className={cx('center')}>
                    {/* Search */}
                   <Search />
                </div>
                <div className={cx('right')}>
                    <div className={cx('right-upload')}>
                        <Button to='/creator-center/upload' type='black-secondary' size='md' borderRadius='rounded-2'>
                            <div className={cx('right-upload_content')}>
                                <PlusIcon />
                                <span>Upload</span>
                            </div>
                        </Button>
                    </div>
                    {
                    loginStatus ? 
                        <>
                            <div className={cx('right-message')}>
                                <Tippy content={<span className={cx('popup-content')}>Messages</span>} >
                                    <Link>
                                        <span>
                                            <MessageIcon />
                                            <sup>61</sup>
                                        </span>
                                    </Link>
                                </Tippy>
                            </div>
                            <div className={cx('right-inbox')}>
                                <Tippy content={<span className={cx('popup-content')}>Inbox</span>} >
                                    <span>
                                        <InboxIcon />
                                        <sup>61</sup>
                                    </span>
                                </Tippy>
                            </div>
                            <Menu width={223} items={menuItems}>
                                <Image  className={cx('right-profile')} style={{backgroundImage:`url(${avatar})`}}/>
                            </Menu>
                           
                        </>
                    : 
                        <>
                            <div className={cx('right-login')}>
                                <Button type='primary' size='sm' borderRadius='rounded-4'>
                                    <span>Login</span>
                                </Button>
                            </div>
                           <Menu width={223} items={menuItems}>
                                <button className={cx('right-more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} width={20} height={20}/>
                                </button>
                           </Menu>
                        </>
                    }
                    
                </div>
            </div>
        </header>
    )
}
export default Header;