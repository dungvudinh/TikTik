
import PropTypes from 'prop-types'
import styles from './Wrapper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Wrapper({children})
{
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}
Wrapper.propTypes = {
    children:PropTypes.node.isRequired
}
export default Wrapper;