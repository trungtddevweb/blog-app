import styles from './NotFound.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const NotFound = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>404</h1>
                <div className={cx('content')}>
                    <p className={cx('text')}>Ôi không! Trang truy cập không tồn tại</p>
                    <p className={cx('desc')}>
                        Có vẻ như trang bạn tìm kiếm không tồn tại! Có thể đã bị di chuyển hoặc xóa
                    </p>
                    <Button to={config.routes.home} className={cx('btn')}>
                        Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
