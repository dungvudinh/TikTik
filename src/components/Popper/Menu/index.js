import PropTypes from 'prop-types';
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import {useState} from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import PopperWrapper from '../Wrapper';
import MenuItem from "./MenuItem";
import Header from "./Header";
const cx = classNames.bind(styles);
function Menu({children, width,  items, hideOnClick = false})
{
    const [history, setHistory] = useState([{data:items}])
    const currentPage = history[history.length -1];
    console.log(history)
    console.log(currentPage);
    return (
        <Tippy
             interactive delay={[0, 700]}
            render={attrs => (
            <div className={cx('setting-popup_list')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                    {history.length > 1 && <Header title={currentPage.title} onBack={()=>{
                        setHistory(prev=>prev.slice(0, prev.length-1))
                    }}/>}
                    <ul className={cx('see-more_popup')} style={{minWidth:width}}>
                        {currentPage.data.map((item, index)=>{
                            const isParent = !!item.children;
                            return (
                                <MenuItem  key={index} item={item} onClick={()=>{
                                    if(isParent) 
                                    {
                                        setHistory(prev=>[...prev, item.children])
                                    }
                                }}/>
                            )
                        })}
                    </ul>
                </PopperWrapper>
            </div>
            )}
            animation={false} onHidden={()=>{
                if(history.length >1)
                  {
                    setHistory(prev=>prev.splice(0,1))
                  }
            }} >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    width:PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool 
}
export default Menu;