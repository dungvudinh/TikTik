import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faXmark, faClock, faUpLong, faFireFlameCurved} from "@fortawesome/free-solid-svg-icons";
import SearchAccountItem from "~/components/SearchAccountItem";
import { CancelSearchIcon, LoadIcon, SearchIcon } from '~/assets/icons';
import { SearchPopup} from "~/components/Popper";
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);

//fake history
const history = ["Đặng Thu Hà", "Duy Thẩm Schannel", "Mộc Thảo"] //save in localstorage
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
function Search() {
    const searchInputRef = useRef();
    const  [searchValue, setSearchValue]= useState('');
    const [searchResult, setSearchResult]= useState([]);
    const [sugResult, setSugResult] = useState([]);
    const [userResult, setUserResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSubmitSearch, setIsSubmitSearch] = useState(false);
    const debouncedValue = useDebounce(searchValue, 1000);
    useEffect(()=>
    {
       if(debouncedValue)
       {
            setLoading(true)
             const fetchAPI = async ()=>
            {
                const result = await searchService.search(searchValue);
                setLoading(false);
                setIsSubmitSearch(false);
                setUserResult(result.user);
                setSugResult(result.suggest);
            }
            fetchAPI();
       }
       else 
       {
        setSugResult([]);
        setUserResult([])
       }
    },[debouncedValue])
    const handleChange =(e)=>
    {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' '))
            setSearchValue(searchValue)
    }
    const handleSearch = (e)=>
    {
        if(e.keyCode ===13) 
        {
            // setIsSubmitSearch(true);
            // fetchAPI();
        }

    }
    return ( 
        <Tippy
            appendTo={()=>document.body}
            render={attrs => (
                <div className={cx('container')} tabIndex={-1} {...attrs}>
                    <SearchPopup>
                        {!searchValue  && (
                        <ul className={cx('search-transfer')}>
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
                        </ul>   
                        )}
                        {searchValue && debouncedValue && (
                            <ul className={cx('sug-result')}>
                                {sugResult.map((data, index)=>(
                                    <li className={cx('list-item')} key={index}>
                                        <div className={cx('search-icon')}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')}/> 
                                        </div>
                                        <div className={cx('sug-item')}>
                                            <h4>{data.title}</h4>
                                        </div>
                                    </li>
                                ))}
                            
                                <div className={cx('sug-account')}>Accounts</div>
                                    {userResult.map((user, index)=>(
                                        <SearchAccountItem  key={index} user={user}/>
                                    ))}
                                <li className={cx('sug-more')}>
                                    <p className="text">View all results for "{searchValue}"</p>
                                </li>
                            </ul>
                        )}
                    </SearchPopup>
                </div>
            )}
            visible={showResult} interactive onClickOutside={()=>setShowResult(false)} animation={false}>
            <div className={cx('center-search')}>
                <input ref={searchInputRef} type="text" className={cx('center-search_input')} placeholder="Search" spellCheck={false} onChange={handleChange}
                value={searchValue} onFocus={()=>setShowResult(true)} onKeyDown={handleSearch}/>
                <div className={cx('center-icon_wrapper')}>
                    {!!searchValue && !loading && <span className={cx('center-icon_wrapper__cancel')} 
                    onClick={()=>{
                        setSearchValue('');
                        searchInputRef.current.focus();
                    }}
                    >
                        <CancelSearchIcon />
                    </span>}
                    {loading &&  <span className={cx('center-icon_wrapper__loading')}><LoadIcon/></span>}
                    
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