import { Link } from 'react-router-dom';
import { useStore } from '~/store';
import { actions } from '~/store';
import PropTypes from 'prop-types';
import Header from "../LayoutComponents/Header"
import Sidebar from "../LayoutComponents/Sidebar"
import styles from "./MainLayout.module.scss";
import classNames from "classnames/bind";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function MainLayout({children})
{
    const [state, dispatch] =useStore();
    const {isOpenAppModal} = state;
    console.log(state);
    const handleHideAppModal = ()=>dispatch(actions.setStateAppModal());
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
            <Rodal visible={isOpenAppModal} onClose={handleHideAppModal} customStyles={{padding:0, borderRadius:'8px', height:'550px'}}  >
                <div className={cx('modal-header')}>
                   <p className={cx('title')}>Get the TikTok app</p>
                </div>
                <div className={cx('modal-content')}>
                    <div className={cx('qr-container')}>
                        <p className={cx('title')}>Scan QR code to download TikTok</p>
                        <div className={cx('qr-content')}>
                            <img src={images.qrCode} />
                        </div>
                    </div>
                </div>
                <div className={cx('download-container')}>
                    <p className={cx('title')}>Download from the app stores</p>
                    <div className={cx('download-content')}>
                        <Link>
                            <img src={images.microsoft} alt="" />
                        </Link>
                        <Link>
                            <img src={images.appStore} alt="" />
                        </Link>
                        <Link>
                            <img src={images.amazon} alt="" />
                        </Link>
                        <Link>
                            <img src={images.ggPlay} alt="" />
                        </Link>
                    </div>
                </div>
            </Rodal>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default MainLayout;