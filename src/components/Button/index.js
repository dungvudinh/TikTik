import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({to, href, children, onClick, type, size, borderRadius})
{
    let Component = 'button';
    const props = {};
    if(to)
    {
        props.to = to;
        Component = Link;
    }
    else if(href)
    {
        props.href = href;
        Component = 'a'; 
    }
    const classes = cx('wrapper', type, size, borderRadius);
    
    return (
        <Component className={cx(classes)} {...props}>
            {children}
        </Component>
    )
}

export default Button;