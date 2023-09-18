import styles from './SearchAccountItem.module.scss';
import classNames from 'classnames/bind';
import img from './mixigaming.webp';
import { BlueIcon } from '~/assets/icons';
const cx = classNames.bind(styles);

function SearchAccountItem()
{
    return (
        <li className={cx('user-sug_item')}>
            <span className={cx('avatar-container')}>
                <img src={img} alt="" />
            </span>
            <div className={cx('sug-item-content')}>
                <div className={cx('sug-item_wrapper')}>
                    <div className={cx('sug-user_infor')}>
                        <h4 className={cx('sug-username')}>
                            mixigaming
                            <span className={cx('sug-blue')}>
                                <BlueIcon />
                            </span>
                        </h4>
                        <p className={cx('sug-nickname')}>Độ Phùng</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default SearchAccountItem;