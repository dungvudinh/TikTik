import { useEffect, useRef, useState} from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import GetApp from '~/components/GetApp';
import video from '~/assets/videos/video.mp4';

const cx = classNames.bind(styles);
const videos = [
    {
        nickname: 'Mixigaming', 
        name:'Độ mixi', 
        videoUrl: video
    }, 
    {
        nickname: 'Mixigaming', 
        name:'Độ mixi', 
        videoUrl: video
    },
    {
        nickname: 'Mixigaming', 
        name:'Độ mixi', 
        videoUrl: video
    }
]
function Home()
{
    const containerRef = useRef();
    const [videoIdPlay, setVideoIdPlay] = useState(0);
    useEffect(()=>
    {
       let isElmInViewPort = (elm)=>
       {
            let rect = elm.getBoundingClientRect();
            let viewHeight  = window.innerHeight || document.documentElement.clientHeight;
            return (
                (rect.top <= (viewHeight - 500) && rect.bottom>=500) 
                // (rect.top<=0 && rect.bottom >=0)
                // || 
                // (rect.bottom >= viewHeight && rect.top <= viewHeight) 
                // || 
                // (rect.top >= 0 && rect.bottom <= viewHeight)
            )
       }
       const handleScrollVideo  = ()=>
       {
            const videos =containerRef.current.children;
            Array.from(videos).forEach((video ,index)=>{
                if(isElmInViewPort(video))
                    setVideoIdPlay(index);
            });
       }
       handleScrollVideo();
       window.addEventListener('scroll', handleScrollVideo);
       return ()=>window.removeEventListener('scroll', handleScrollVideo);
    }, [])
    return (
        <div className={cx('homepage')}>
            <div className={cx('container')} ref={containerRef}>
                {videos.map((video, index)=>(
                    <VideoItem key={index} isPlay={index === videoIdPlay}/>
                ))}
                
            </div>
            <GetApp />
        </div>
    )
}
export default Home;