import PropTypes from 'prop-types';
import styles from './FollowingAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function FollowingAccounts() {
    return ( 
        <div className={cx('user-container')}>
            <h2 className={cx('following-account_title')}>Following accounts</h2>
            <ul className={cx('account-list')}>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
                <li className={cx('account-item')}>
                    <AccountItem />
                </li>
            </ul>
            <button className={cx('following-see_all')}>
                <p>See more</p>
            </button>
        </div>
     );
}
FollowingAccounts.propTypes = {
    
}
export default FollowingAccounts;