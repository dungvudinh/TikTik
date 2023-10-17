import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './VideoItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faComment, faEllipsis, faFlag, faHeart, faHeartCrack, faMusic, faPause, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';
import { ProfilePopup } from '../Popper';
import video from '~/assets/videos/video.mp4';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { PopperWrapper } from '../Popper';
import Volume from '../Volume';
import { useTimeFormatVideo } from '~/hooks';
import Seekbar from '../Seekbar';
import { CopyIcon, CopyLinkIcon, FbIcon, HeartIcon, SendIcon, WhatsAppIcon } from '~/assets/icons';

const cx = classNames.bind(styles);
function VideoItem({isPlay}) {
    const [isPlayVideo, setPlayVideo] = useState(false);
    const [videoDuration, setDuration] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [isShowMoreBtn, setShowMoreBtn] = useState(false);
    const [isFollowing, setFollowing] = useState(false);
    const [isActiveHeart, setActiveHeart] = useState(false);
    const [isActiveBookMark, setActiveBookMark] = useState(false);
    const videoRef = useRef();
    const wordRef = useRef();
    const lineRef = useRef();
    useEffect(()=>
    {
        const wordHeight = wordRef.current.offsetHeight;
        const lineHeight = parseFloat(window.getComputedStyle(lineRef.current).lineHeight);
        if(wordHeight > lineHeight)
        {
            setShowMoreBtn(true);
        }
    },[])
    useEffect(()=>
    {
        if(isPlay)
        {
            videoRef.current.play();
            setPlayVideo(true);
        }
        else 
        {
            videoRef.current.pause();
            setPlayVideo(false);
        }

    }, [isPlay])
    const handlePlayVideo = ()=> 
    {
        if(isPlayVideo)
            videoRef.current.pause();
        else 
            videoRef.current.play();
        setPlayVideo(!isPlayVideo);
    }
   const handleLoopVideo = ()=> 
   {
        setPlayVideo(false);
        videoRef.current.play();
        setPlayVideo(true);
   }
   const handleShowMoreDesc = ()=>{setShowMoreBtn(false);}
   const handleHideMoreDesc = ()=> {setShowMoreBtn(true);}

    return ( 
        <div className={cx('video-item')}>
            <Link className={cx('avatar-achor')}>
                <div className={cx('container')}>
                    <span className={cx('border')}>
                        <img src={images.noUser} alt="" />
                    </span>
                </div>
            </Link>
            <div className={cx('content-container')}>
                <div className={cx('info-container')}>
                    <ProfilePopup useSetFollowing= {()=>[isFollowing, setFollowing]}>
                        <Link className={cx('author-container')}>
                            <h3 className={cx('author-nickname')}>mukbangfan_asmr</h3>
                            <h4 className={cx('author-name')}>MUKBANG</h4>
                        </Link>
                    </ProfilePopup>
                    <div className={cx('follow-btn_wrapper')}>
                        {
                            isFollowing 
                            ? 
                                <Button type='black-secondary' size='sm' onClick={()=>setFollowing(false)}>Following</Button>
                            :
                                <Button type='pink-secondary' size='sm' onClick={()=>setFollowing(true)}>Follow</Button>
                        }
                       
                    </div>
                    <div className={cx('video_caption-container',  {show:!isShowMoreBtn, hide: isShowMoreBtn})} ref={lineRef}>
                        {isShowMoreBtn && <div className={cx('btn-more')} onClick={handleShowMoreDesc}>more</div>}
                        <div className={cx('video-desc')} ref={wordRef}>
                            <span className={cx('caption')}>Home made Gimbap Tuna - Squid -Egg</span>
                            <Link className={cx('common-link')}>
                                <strong>#mukbang</strong>
                            </Link>
                            <Link className={cx('common-link')}>
                                <strong>#cooking</strong>
                            </Link>
                            <Link className={cx('common-link')}>
                                <strong>#asmr</strong>
                            </Link>
                            <Link className={cx('common-link')}>
                                <strong>#asmrsounds</strong>
                            </Link>
                            <Link className={cx('common-link')}>
                                <strong>#asmrsounds</strong>
                            </Link>
                        </div>
                       {!isShowMoreBtn &&  <button className={cx('less-btn')} onClick = {handleHideMoreDesc}>less</button>}
                    </div>
                    <div className={cx('music_tag-wrapper')}>
                        <h4 className={cx('video-music')}>
                            <Link>
                                <FontAwesomeIcon icon={faMusic}/>
                                <div className={cx('music')}>original sound - CountrylifeVlog</div>
                            </Link>
                        </h4>
                    </div>
                </div>
                <div className={cx('video-wrapper')}>
                    <div className={cx('video_card-container')}>
                        <canvas width='83'>
                        </canvas>
                        <div className={cx('video_player-container')}>
                            <div className={cx('container')}>
                                <div className={cx('preview-video')}>
                                    <span>
                                        <picture>
                                            <source srcSet={images.cookImage}/>
                                            <img src={images.cookImage} alt="" />
                                        </picture>
                                    </span>
                                </div>
                                <div className={cx('player-wrapper')}>
                                    <div className={cx('wrapper')}>
                                        <video ref={videoRef} onTimeUpdate={(e)=>setCurrentTime(Math.floor(e.target.currentTime))} 
                                        onLoadedMetadata={(e)=>setDuration(e.target.duration)} 
                                        onEnded={handleLoopVideo} 
                                        >
                                            <source src={video} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('play_icon-container')} onClick={handlePlayVideo}>
                                <FontAwesomeIcon icon={faPlay} className={cx('video_play-icon',{active:!isPlayVideo})}/>
                                <FontAwesomeIcon icon={faPause} className={cx('video_pause-icon' ,{active:isPlayVideo})}/>
                            </div>
                            <Volume video={videoRef}/>
                            <div className={cx('video_control-container')}>
                                {videoDuration && <Seekbar currentTime={currentTime} duration={videoDuration} video={videoRef}/>}
                                <div className={cx('seekbar_time-container')}>
                                    {useTimeFormatVideo(currentTime)}:{useTimeFormatVideo(videoDuration)}
                                </div>
                            </div>
                            <Tippy
                             interactive 
                             placement='bottom-start'
                             appendTo={()=>document.body}
                                render={attrs => (
                                    <div tabIndex="-1" {...attrs}>
                                        <PopperWrapper >
                                           <ul className={cx('video_menu-popup-container')}>
                                            <li className={cx('list_item-wrapper')}>
                                                <div className={cx('item_icon-wrapper')}>
                                                    <FontAwesomeIcon icon={faHeartCrack} color='#000'/>
                                                </div>
                                                <span>Not interested</span>
                                            </li>
                                            <li className={cx('list_item-wrapper')}>
                                                <div className={cx('item_icon-wrapper')}>
                                                    <FontAwesomeIcon icon={faFlag} color='#000'/>
                                                </div>
                                                <span>Report</span>
                                            </li>
                                           </ul>
                                        </PopperWrapper>
                                    </div>
                                )}
                                animation={false} >
                                <div className={cx('icon-wrapper')}>
                                    <FontAwesomeIcon icon={faEllipsis}/>
                                </div>
                            </Tippy>
                        </div>
                    </div>
                    <div className={cx('action_card-container')}>
                        <button className={cx('button_action-item')} onClick={()=>setActiveHeart(!isActiveHeart)}>
                            <span>
                                <FontAwesomeIcon icon={faHeart} style={{color:isActiveHeart && 'rgba(254, 44, 85, 1)'}}/>
                            </span>
                            <strong>7.2M</strong>
                        </button>
                        <button className={cx('button_action-item')}>
                            <span>
                                <FontAwesomeIcon icon={faComment}/>
                            </span>
                            <strong>11K</strong>
                        </button>
                        <button className={cx('button_action-item')} onClick={()=>setActiveBookMark(!isActiveBookMark)}>
                            <span>
                                <FontAwesomeIcon icon={faBookmark} style={{color: isActiveBookMark && 'rgba(250, 206, 21, 1)'}}/>
                            </span>
                            <strong>416.2K</strong>
                        </button>
                        <Tippy
                             interactive 
                             placement='top-start'
                             appendTo={()=>document.body}
                                render={attrs => (
                                    <div tabIndex="-1" {...attrs}>
                                        <PopperWrapper >
                                           <div className={cx('share-wrapper')}>
                                                <a className={cx('share-link')}>
                                                    <CopyIcon />
                                                    <span>Embed</span>
                                                </a>
                                                <a className={cx('share-link')}>
                                                    <SendIcon />
                                                    <span>Send to friends</span>
                                                </a>
                                                <a className={cx('share-link')}>
                                                    <FbIcon />
                                                    <span>Share to Facebook</span>
                                                </a>
                                                <a className={cx('share-link')}>
                                                    <WhatsAppIcon />
                                                    <span>Share to Whatsapp</span>
                                                </a>
                                                <a className={cx('share-link')}>
                                                    <CopyLinkIcon />
                                                    <span>Copy Link</span>
                                                </a>
                                           </div>
                                        </PopperWrapper>
                                    </div>
                                )}
                                animation={false} delay={[0, 700]}>
                                    <button className={cx('button_action-item')}>
                                        <span>
                                            <FontAwesomeIcon icon={faShare}/>
                                        </span>
                                        <strong>14.1K</strong>
                                    </button>
                                </Tippy>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default VideoItem;