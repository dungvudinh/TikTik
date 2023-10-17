import { forwardRef } from "react";
import avatar from "~/avatar.jpeg";
import styles from './Image.module.scss';
import classNames from "classnames/bind";
import images from "~/assets/images";
const cx = classNames.bind(styles);

const Image = forwardRef(({...props}, ref)=>{
    if(!props.src)
    {
        props.src = images.noUser;
    }
    return ( 
        <img {...props}  ref={ref}/>
     );
})

export default Image;