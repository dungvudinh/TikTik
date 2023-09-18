import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEllipsisVertical, faFireFlameCurved, faMagnifyingGlass, faSpinner, faUpLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import Popper from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import {CancelSearchIcon, InboxIcon, MessageIcon, PlusIcon, LiveIcon, LangIcon, FeedbackIcon, KeyboardIcon, ModeIcon} from "~/assets/icons";
import avatar from "~/avatar.jpeg";
import Button from "~/components/Button";
import SearchAccountItem from "~/components/SearchAccountItem";
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
function Header()
{
    const [loginStatus ,setLoginStatus] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [searchResult, setSearchResult]  = useState([]);
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
    console.log(showResult);
    return (
        <header className ={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <img src={images.logo} alt="" className={cx('.logo')}/>
                </div>
                <div className={cx('center')}>
                    <Tippy
                        render={attrs => (
                            <div className={cx('container')} tabIndex={-1} {...attrs}>
                                <Popper>
                                    {/* <ul className={cx('search-transfer')}>
                                        {history.length > 0 && 
                                            <>
                                                <div className={cx('search-transfer_history__title')}>Recent Searches</div>
                                                {history.map((item, index)=>(
                                                     <li className={cx('search-item')} key={index}>
                                                     <span >
                                                         <FontAwesomeIcon icon={faClock} className={cx('clock-icon')}/>
                                                     </span>
                                                     <h4>{item}</h4>
                                                    <span className={cx('delete-icon')}>
                                                        <FontAwesomeIcon icon={faXmark} />
                                                    </span>
                                                 </li>
                                                ))}
                                            </>
                                        }
                                       
                                        <div className={cx('search-title')}>You may like</div>
                                        {trends && trends.map((trend, index)=>
                                        {
                                            return (
                                                <li className={cx('search-item')} key={index}>
                                                <span className={cx('primary-icon')}>
                                                    {index === 0 
                                                    ? 
                                                    <FontAwesomeIcon icon={faUpLong} />
                                                    :
                                                        (index < 4  
                                                        ? 
                                                        <FontAwesomeIcon icon={faFireFlameCurved}/>
                                                        :
                                                        <div className={cx('mark-dot_icon')}>
                                                            <div></div>
                                                        </div>)
                                                    }
                                                </span>
                                                <h4>{trend.title}</h4>
                                            </li>
                                            )
                                        })}
                                    </ul>    */}
                                    <ul className={cx('sug-result')}>
                                        <li className={cx('list-item')}>
                                            <div className={cx('search-icon')}>
                                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')}/> 
                                            </div>
                                            <div className={cx('sug-item')}>
                                                <h4>mixigaming</h4>
                                            </div>
                                        </li>
                                        <div className={cx('sug-account')}>Accounts</div>
                                        <SearchAccountItem />
                                        <li className={cx('sug-more')}>
                                            <p className="text">View all results for "mixigaming"</p>
                                        </li>
                                    </ul>
                                </Popper>
                            </div>
                        )}
                    visible={searchResult.length > 0 ? true : false} interactive>
                        <div className={cx('center-search')}>
                            <input type="text" className={cx('center-search_input')} placeholder="Search" spellCheck={false} onFocus={()=>setShowResult(true)} onBlur={()=>setShowResult(false)} />
                            <div className={cx('center-icon_wrapper')}>
                                <span className={cx('center-icon_wrapper__cancel')}><CancelSearchIcon /></span>
                                <span className={cx('center-icon_wrapper__loading')}><FontAwesomeIcon icon={faSpinner}/></span>
                            </div>
                            <span className={cx('center-search_col')}></span>
                            <button className={cx('center-search_btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                        </div>
                    </Tippy>
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
                                <Tippy content={<span className={cx('popup-content')}>Messages</span>} delay={[0, 200]}>
                                    <Link>
                                        <span>
                                            <MessageIcon />
                                        </span>
                                    </Link>
                                </Tippy>
                            </div>
                            <div className={cx('right-inbox')}>
                                <Tippy content={<span className={cx('popup-content')}>Inbox</span>} delay={[0, 200]}>
                                    <span>
                                        <InboxIcon />
                                    </span>
                                </Tippy>
                            </div>
                            <div className={cx('right-profile')} style={{backgroundImage:`url(${avatar})`}}>
                            </div>
                        </>
                    : 
                        <>
                            <div className={cx('right-login')}>
                                <Button type='primary' size='sm' borderRadius='rounded-4'>
                                    <span>Login</span>
                                </Button>
                            </div>
                            <Tippy
                                render={attrs => (
                                <div className={cx('setting-popup_list')} tabIndex="-1" {...attrs}>
                                    <Popper>
                                        <ul className={cx('see-more_popup')}>
                                            <li className={cx('list-item_wrapper')}>
                                                <Link to=''>
                                                   <span className={cx('list-item_icon')}>
                                                        <LiveIcon />
                                                   </span>
                                                    <span>LIVE  Creator Hub</span>
                                                </Link>
                                            </li>
                                            <li className={cx('list-item_wrapper', 'pretty')}>
                                                <div className={cx('setting-item', )}>
                                                    <span className={cx('list-item_icon')}>  <LangIcon /></span>
                                                    <span>English</span>
                                                </div>
                                            </li>
                                            <li className={cx('list-item_wrapper')}>
                                                <Link to='/feedback'>
                                                   <span  className={cx('list-item_icon')}> <FeedbackIcon /></span>
                                                    <span>Feedback and help</span>
                                                </Link>
                                            </li>
                                            <li className={cx('list-item_wrapper', 'pretty')}>
                                                <div className={cx('setting-item')}>
                                                   <span  className={cx('list-item_icon')}> <KeyboardIcon /></span>
                                                    <span>Keyboard shortcuts</span>
                                                </div>
                                            </li>
                                             <li className={cx('list-item_wrapper', 'pretty')}>
                                                <div className={cx('setting-item')}>
                                                    <span  className={cx('list-item_icon')}><ModeIcon /></span>
                                                    <span>Dark mode</span>
                                                </div>
                                                <button className={cx('button-switch_container')}>
                                                    <div className={cx('switch-wrapper')}>
                                                        <span className={cx('switch-icon')}></span>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </Popper>
                                </div>
                                )}
                              offset={[-60,10]} interactive>
                                <button className={cx('right-more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Tippy>
                           
                        </>
                    }
                    
                </div>
            </div>
        </header>
    )
}
export default Header;