import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import { ExploreIcon, ExploreSolidIcon, GrUserIcon, GrUserSolidIcon, HomeIcon, HomeSolidIcon, LiveIcon, LiveMenuIcon, LiveMenuSolidIcon } from '~/assets/icons';
import { useState } from 'react';
import config from '~/config';
const cx = classNames.bind(styles);
const LIST_MENU = [
    {
        title:'For You', 
        icon:<HomeIcon/>, 
        solidIcon: <HomeSolidIcon/>, 
        to:config.routes.home,
    } ,
    {
        title:'Following', 
        icon:<GrUserIcon />, 
        solidIcon: <GrUserSolidIcon />, 
        to: config.routes.following,
    } ,
    {
        title:'Explore', 
        icon:<ExploreIcon/>, 
        solidIcon:<ExploreSolidIcon />, 
        to: config.routes.explore,
    } ,
    {
        title:'LIVE', 
        icon:<LiveMenuIcon/>, 
        solidIcon:<LiveMenuSolidIcon />, 
        to: config.routes.live,
    } ,

]
function Menu() {
    const [selectItem ,setSelectItem]  = useState(0);
    return ( 
        <nav className={cx('container')}>
            <ul className={cx('list-menu')}>
                {LIST_MENU.map((menuItem, index)=>(
                    <MenuItem key={index} title={menuItem.title} to={menuItem.to} icon={menuItem.icon} solidIcon={menuItem.solidIcon}/>
                ))}
                
            </ul>
        </nav>
     );
}

export default Menu;