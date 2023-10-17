import {NavLink } from "react-router-dom";
import styles from './Menu.module.scss';
import classNames from "classnames/bind";
const cx  = classNames.bind(styles);
function MenuItem({title, to, icon, solidIcon}) {
    return ( 
        <li>
            <NavLink to={to} className={({isActive})=>cx('menu-item', {active: isActive})}>
                <div className={cx('gr-icon')}>
                    <span className={cx('icon')}>{icon}</span>
                    <span className={cx('solid-icon')}>{solidIcon}</span>
                </div>
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </li>
    );
}

export default MenuItem;