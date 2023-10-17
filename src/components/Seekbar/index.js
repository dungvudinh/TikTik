import { useEffect, useRef } from 'react';
import styles from './Seekbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Seekbar({currentTime, duration ,video}) {
    const seekbarProgress = useRef();
    const seekbarCircle = useRef();
    const seekbar = useRef();
    useEffect(()=>
    {
 

        let isDragging = false;
        const setVolume = (volume)=>
        {
            // setCurrentVolume(volume);
           video.current.currentTime = volume * duration;
            seekbarCircle.current.style.left = `${volume * 100}%`;
            seekbar.current.style.transform = `scaleX(${volume}) translateY(-50%)`;
        }
        const updateVolume  =(e)=>
        {
            if(isDragging)
            {
                const rect = seekbarProgress.current.getBoundingClientRect();
                const x =  e.clientX - rect.left;
                const width = rect.width;
                let volume = x/width;
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
        seekbarProgress.current.addEventListener('mousedown', handleMoveVolCircle);
        seekbar.current.addEventListener('mousedown', handleMoveVolCircle);
        seekbarCircle.current.addEventListener('mousedown', handleMouseDownCircle);
        seekbarCircle.current.addEventListener('dragstart', (e)=>e.preventDefault());
        seekbarCircle.current.addEventListener('dragover', (e)=>e.preventDefault());
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return ()=>
        {
            seekbarProgress.current.removeEventListener('mousedown', handleMoveVolCircle);
            seekbar.current.removeEventListener('mousedown', handleMoveVolCircle);
            seekbarCircle.current.removeEventListener('mousedown', handleMouseDownCircle);
            seekbarCircle.current.removeEventListener('dragstart');
            seekbarCircle.current.removeEventListener('dragover');
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }, [])
    return ( 
        <div className={cx('seekbar-container')}>
            <div className={cx('seekbar-progress')} ref={seekbarProgress}></div>
            <div className={cx('seekbar-circle')} ref={seekbarCircle} style={{left:`${(currentTime/duration) * 100}%`}}></div>
            <div className={cx('seekbar')} ref={seekbar} style={{transform:`scaleX(${currentTime/duration}) translateY(-50%)`}}></div>
        </div>
     );
}

export default Seekbar;