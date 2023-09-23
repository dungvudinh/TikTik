import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { ArrowIcon } from '~/assets/icons';
const cx = classNames.bind(styles);

function Header({title, onBack}) {
    return (
        <div className={cx('header')}>
            <span onClick={onBack}>
                <ArrowIcon />
            </span>
            <p className={cx('title')}>
                {title}
            </p>
        </div>
      );
}

export default Header;