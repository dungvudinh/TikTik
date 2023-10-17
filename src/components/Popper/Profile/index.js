import { memo } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import PopperWrapper from '../Wrapper';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Profile({children, useSetFollowing}) {
    const [isFollowing, setFollowing]  = useSetFollowing();
    return ( 
        <Tippy appendTo={()=>document.body}
        interactive delay={[700, 0]}
       render={attrs => (
       <div className={cx('profile-container')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className={cx('profile-content')}>
                <div className={cx('head-container')}>
                    <Link>
                        <span>
                            <img src={images.noUser} alt="" />
                        </span>
                    </Link>
                    <div className={cx('btn-wrappper')}>
                        {
                            isFollowing 
                            ?
                                <Button type='black-secondary' size='sm' className="" onClick={()=>setFollowing(false)}>Following</Button>
                            :
                                <Button type='pink-secondary' size='sm' className="" onClick={()=>setFollowing(true)}>Follow</Button>
                        }

                        
                    </div>
                </div>
                <Link className={cx('user-nickname')}>
                    pastrychef_am
                </Link>
                <br/>
                <Link className={cx('username')}>Margri Alberto</Link>
                <p className={cx('user-status')}>
                    <span className={cx('count','user_card-follow-count')}>20</span>
                    <span className={cx('user_card-follower')}>Followers</span>
                    <span  className={cx('count', 'user_card-like-count')}>20</span>
                    <span className={cx('user_card-like')}>Likes</span>
                </p>
                <p className={cx('user_card-bio')}>
                    When the pastry hits your tongue, THAT'S AMORE 
                </p>
            </div>
           </PopperWrapper>
       </div>
       )}
        animation={false}  placement="bottom-start" offset={[-20,-20]}>
       {children}
    </Tippy>
    );
}

export default memo(Profile);