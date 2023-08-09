import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Sidebar()
{
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1>sidebar component</h1>
            </div>
        </div>
    )
}
export default Sidebar;