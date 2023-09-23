import { forwardRef } from "react";
import avatar from "~/avatar.jpeg";
import styles from './Image.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Image = forwardRef(({...props}, ref)=>{
    return ( 
        <div {...props}></div>
     );
})

export default Image;