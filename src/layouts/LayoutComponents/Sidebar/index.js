import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Menu from './Menu';
import images from '~/assets/images';
import Button from '~/components/Button';
import FollowingAccounts from '~/components/FollowingAccounts';

const cx = classNames.bind(styles);
function Sidebar()
{
    return (
        <div className={cx('container')}>
            <div className={cx('scrollbox')}>
                <div className={cx('wrapper')}>
                    <Menu />
                    <FollowingAccounts />
                    {/* <div className={cx('frame')}>
                        <p className={cx('login-hint')}>Log in to follow creators, like videos, and view comments</p>
                        <Button type='pink-secondary' size='lg' >Log in</Button>
                    </div> */}
                    <div className={cx('footer')}>
                        <div className={cx('footer-banner')}>
                            <Link to="">
                                <img src={images.effectImg} alt="" />
                                <div className={cx('container')}>
                                    <h4>Create effects</h4>
                                </div>
                            </Link>
                        </div>
                        <div className={cx('link')}>
                            <Link>About</Link>
                            <Link>Newsroom</Link>
                            <Link>Contact</Link>
                            <Link>Careers</Link>
                        </div>
                        <div className={cx('link')}>
                            <Link>TikTok for Good</Link>
                            <Link>Advertise</Link>
                            <Link>Developers</Link>
                            <Link>Transparency</Link>
                            <Link>TikTok Rewards </Link>
                            <Link>TikTok Embeds</Link>
                        </div>
                        <div className={cx('link')}>
                            <Link>Help</Link>
                            <Link>Safety</Link>
                            <Link>Terms</Link>
                            <Link>Privacy</Link>
                            <Link>Creator Portal</Link>
                            <Link>Community Guidelines</Link>
                        </div>
                        <span className={cx('copyright')}>
                            © 2023 TikTok
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;