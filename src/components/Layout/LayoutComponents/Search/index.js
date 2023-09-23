import { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import SearchAccountItem from "~/components/SearchAccountItem";
import { CancelSearchIcon, LoadIcon, SearchIcon } from '~/assets/icons';
import { SearchPopup} from "~/components/Popper";

const cx = classNames.bind(styles);
function Search() {
    const searchInputRef = useRef();
    const  [searchValue, setSearchValue]= useState('');
    const [searchResult, setSearchResult]= useState([]);
    const [showResult, setShowResult] = useState(true);
    useEffect(()=>
    {
       
            const timer = setTimeout(()=>
            {
                setSearchResult([1,2,3,4,5]);
            }, 1000)
            return ()=>clearTimeout(timer)
    }, [searchValue])
  
    return ( 
        <Tippy
            render={attrs => (
                <div className={cx('container')} tabIndex={-1} {...attrs}>
                    <SearchPopup>
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
                    </SearchPopup>
                </div>
            )}
            visible={showResult && (searchResult.length > 0)} interactive onClickOutside={()=>setShowResult(false)} animation={false}>
            <div className={cx('center-search')}>
                <input ref={searchInputRef} type="text" className={cx('center-search_input')} placeholder="Search" spellCheck={false} onChange={(e)=>setSearchValue(e.target.value)}
                value={searchValue} onFocus={()=>setShowResult(true)}/>
                <div className={cx('center-icon_wrapper')}>
                    {!!searchValue && <span className={cx('center-icon_wrapper__cancel')} 
                    onClick={()=>{
                        setSearchValue('');
                        searchInputRef.current.focus();
                    }}
                    >
                        <CancelSearchIcon />
                    </span>}
                    {/* <span className={cx('center-icon_wrapper__loading')}><LoadIcon/></span> */}
                </div>
                <span className={cx('center-search_col')}></span>
                <button className={cx('center-search_btn')}>
                    <span>
                        <SearchIcon/>
                    </span>
                </button>
            </div>
        </Tippy>
     );
}

export default Search;