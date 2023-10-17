import { useEffect, useState } from 'react';
import { useStore } from '~/store';
import { actions } from '~/store';
import styles from './GetApp.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTv, faXmark} from "@fortawesome/free-solid-svg-icons";
import { PhoneIcon, ScrollMenu } from '~/assets/icons';
const cx = classNames.bind(styles);
function GetApp() {
    const [openApp, setOpenApp] = useState(false);
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [state, dispatch] = useStore();
    useEffect(()=>{
        const handleScroll = ()=>
        {
            if(window.scrollY >=200)
                setShowGoToTop(true)
            else 
                setShowGoToTop(false)
        }
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [])
    const handleShowAppModal = ()=>
    {
        console.log('hello');
        dispatch(actions.setStateAppModal());
    }
    return ( 
        <div className={cx('bottom-container', {active:showGoToTop})}>
            <div className={cx('promotion')}>
                <button className={cx('button-get_app')} onClick={()=>setOpenApp(true)}>Get app</button>
                <div className={cx('expand', {
                    active:openApp
                })}>
                    <button className={cx('mark-wrapper')} onClick={()=>setOpenApp(false)}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <div className={cx('expand-wrapper')}>
                        <div className={cx('item-container')}>
                            <FontAwesomeIcon icon={faTv}/>
                            <span>Get TikTok for desktop</span>
                        </div>
                        <div className={cx('item-container')}  onClick={handleShowAppModal}>
                            <PhoneIcon/>
                            <span>Get TikTok App</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('button-icon')}>
                <ScrollMenu />
            </button>
        </div>
     );
}

export default GetApp;