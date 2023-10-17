import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function MenuItem({item, onClick}) {
   let Component = 'div';
   const props = {};
   const classes = cx('list-item_wrapper', {
        pretty:!item.to, 
        separate: !!item.separate
    })
   if(item.to)
   {
        Component = Link;
        props.to = item.to;
   }
   else 
   {
        props.className = cx('setting-item');
   }
    return ( 
        <li className={classes} onClick={onClick}>
            <Component {...props} >
                <span className={cx('list-item_icon')}>
                    {item.icon}
                </span>
                <span>{item.title}</span>
            </Component>
        </li>
     );
}
MenuItem.propTypes = {
    item:PropTypes.object.isRequired, 
    onClick: PropTypes.func
}
export default MenuItem;