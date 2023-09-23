import styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Search({children})
{
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}
export default Search;