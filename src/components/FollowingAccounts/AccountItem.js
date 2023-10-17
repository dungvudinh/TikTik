import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import { BlueIcon, BorderIcon } from '~/assets/icons';
import { Link } from 'react-router-dom';
import Image from '../Images';

const cx = classNames.bind(styles);
function AccountItem() {
    return ( 
            <Link className={cx('container')}>
                <div className={cx('user-avatar')}>
                    <BorderIcon/> 
                    <span className={cx('image')}>
                        <Image />
                    </span>
                </div>
                <div className={cx('user-content')}>
                    <div className={cx('nick-name')}>
                        <span className={cx('user-title')}>Dungg</span>
                        <span className={cx('user-icon')}>
                            <BlueIcon />
                        </span>
                    </div>
                    <p className={cx('name')}>Vũ Đình Dũng</p>

                </div>
            </Link>
     );
}


AccountItem.propTypes = {

}
export default AccountItem;