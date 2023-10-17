import PropTypes from 'prop-types';
import styles from './SearchAccountItem.module.scss';
import classNames from 'classnames/bind';
import img from './mixigaming.webp';
import { BlueIcon } from '~/assets/icons';
import Image from '../Images';
const cx = classNames.bind(styles);

function SearchAccountItem({user})
{
    return (
        <li className={cx('user-sug_item')}>
            <span className={cx('avatar-container')}>
                <Image />
            </span>
            <div className={cx('sug-item-content')}>
                <div className={cx('sug-item_wrapper')}>
                    <div className={cx('sug-user_infor')}>
                        <h4 className={cx('sug-username')}>
                            {user.nick_name} 
                            <span className={cx('sug-blue')}>
                                <BlueIcon />
                            </span>
                        </h4>
                        <p className={cx('sug-nickname')}>{user.full_name}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}
SearchAccountItem.propTypes = {
    user:PropTypes.object.isRequired
}
export default SearchAccountItem;