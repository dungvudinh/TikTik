import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faFireFlameCurved, faMagnifyingGlass, faSpinner, faUpLong } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import Popper from "~/components/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import {CancelSearchIcon, InboxIcon, MessageIcon, PlusIcon} from "~/assets/icons";
import avatar from "~/avatar.jpeg";
const cx = classNames.bind(styles);
function Header()
{
    const [loginStatus ,setLoginStatus] = useState(false);
    const [showResult, setShowResult] = useState(false);
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
                                    <ul className={cx('search-transfer')}>
                                        <div className={cx('search-title')}>You may like</div>
                                        <li className={cx('search-item')}>
                                            <span>
                                                <FontAwesomeIcon icon={faUpLong} />
                                            </span>
                                            <h4>Anh thư và chú văn</h4>
                                        </li>
                                        <li className={cx('search-item')}>
                                            <span>
                                                <FontAwesomeIcon icon={faFireFlameCurved}/>
                                            </span>
                                            <h4>Anh thư và chú văn</h4>
                                        </li>
                                        <li className={cx('search-item')}>
                                            <div className={cx('mark-dot_icon')}>
                                                <div></div>
                                            </div>
                                            <h4>Anh thư và chú văn</h4>
                                        </li>
                                    </ul>
                                </Popper>
                            </div>
                        )}
                    visible={true} interactive>
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
                        <Link>
                            <div className={cx('right-upload_content')}>
                                <PlusIcon />
                                <span>Upload</span>
                            </div>
                        </Link>
                    </div>
                    {
                    loginStatus ? 
                        <>
                            <div className={cx('right-message')}>
                                <Link>
                                    <span>
                                        <MessageIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className={cx('right-inbox')}>
                                <span>
                                    <InboxIcon />
                                </span>
                            </div>
                            <div className={cx('right-profile')} style={{backgroundImage:`url(${avatar})`}}>
                            </div>
                        </>
                    : 
                        <>
                            <button className={cx('right-login')}>
                                Login
                            </button>
                            <button className={cx('right-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </>
                    }
                    
                </div>
            </div>
        </header>
    )
}
export default Header;