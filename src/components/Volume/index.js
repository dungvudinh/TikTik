import {useRef, useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import styles from './Volume.module.scss';
import classNames from 'classnames/bind';
import { MuteIcon, SoundIcon } from '~/assets/icons';
const cx = classNames.bind(styles);

function Volume({video})
{
    const [isMutedVideo, setMutedVideo] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(1);
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    const volumeControlProgress = useRef();
    const volumeCircle = useRef();
    const volumeBar = useRef();
    useEffect(()=>
    {
        let isDragging = false;
        const setVolume = (volume)=>
        {
            setCurrentVolume(volume);
            video.current.volume = volume;
            volumeCircle.current.style.transform = `translateY(-${volume * 36}px)`;
            volumeBar.current.style.transform = `scaleY(${volume})`;
        }
        const updateVolume  =(e)=>
        {
            if(isDragging)
            {
                const rect = volumeControlProgress.current.getBoundingClientRect();
                const y = rect.bottom - e.clientY;
                const height = rect.height;
                let volume = y/height;
                volume = Math.max(0, Math.min(1, volume));
                setVolume(volume);
            }
        }
        const handleMoveVolCircle = (e)=>
        {
            isDragging = true;
            updateVolume(e);
        }
        const handleMouseDownCircle = (e)=>
        {
            isDragging = true;
            updateVolume(e);

        }
        const handleMouseMove = (e)=>
        {
            if(isDragging)
                updateVolume(e);
        }
        const handleMouseUp = ()=>{isDragging = false;}
        console.log(showVolumeControl);
        if(showVolumeControl)
        {
            volumeControlProgress.current.addEventListener('mousedown', handleMoveVolCircle);
            volumeBar.current.addEventListener('mousedown', handleMoveVolCircle);
            volumeCircle.current.addEventListener('mousedown', handleMouseDownCircle);
            volumeCircle.current.addEventListener('dragstart', (e)=>e.preventDefault());
            volumeCircle.current.addEventListener('dragover', (e)=>e.preventDefault());
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        return ()=>
        {
           if(showVolumeControl)
           {
                console.log(volumeControlProgress.current);
                if(volumeControlProgress.current)
                    volumeControlProgress.current.removeEventListener('mousedown', handleMoveVolCircle);
                if(volumeCircle.current)
                {
                    volumeCircle.current.removeEventListener('mousedown', handleMouseDownCircle);
                    volumeCircle.current.removeEventListener('dragstart');
                    volumeCircle.current.removeEventListener('dragover');
                }
               document.removeEventListener('mousemove', handleMouseMove);
               document.removeEventListener('mouseup', handleMouseUp);
           }
        }
    }, [showVolumeControl])
    const handleMuteVideo = ()=>
    {
        if(isMutedVideo)
        {
            video.current.muted = false;
            volumeCircle.current.style.transform = `translateY(-${currentVolume * 36}px)`;
        }
        else 
        {
            video.current.muted = true;
            volumeCircle.current.style.transform = `translateY(0)`;
        }
        setMutedVideo(!isMutedVideo);
    }
    return (
        <div className={cx('voice_control-container')} onMouseOver={()=>{setShowVolumeControl(true); console.log('mouse over')}} onMouseOut={()=>setShowVolumeControl(false)}>
            {showVolumeControl && 
            <div className={cx('volume_control-container', {muted:isMutedVideo})} >
                <div className={cx('volume_control-progress')} ref={volumeControlProgress}></div>
                <div className={cx('volume_control-circle')} ref={volumeCircle} style={{transform:`translateY(-${currentVolume * 36}px)`}}></div>
                <div className={cx('volume_control-bar')} ref={volumeBar} style={{transform:`scaleY(${currentVolume})`}} ></div>
            </div>
            }
            
            <div className={cx('mute_icon-container')} onClick={handleMuteVideo} >
                <span className={cx('sound-icon', {active:!isMutedVideo})}>
                    <SoundIcon />
                </span>
                <span className={cx('mute-icon', {active:isMutedVideo})}>
                    <MuteIcon />
                </span>
            </div>
        </div>
        );
}
export default Volume;