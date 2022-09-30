import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const Single = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Image
                        className={cx('image')}
                        src="https://i.pinimg.com/originals/14/ad/5c/14ad5c1e0e5eeccba9b5c122245ee36c.jpg"
                        alt="Image"
                    />
                    <div className={cx('user')}>
                        <Image
                            className={cx('avt')}
                            src="https://i.pinimg.com/564x/61/10/f0/6110f0d1c68fc446d9d7210c82caa9c6.jpg"
                        />
                        <div className={cx('info')}>
                            <span>Trung</span>
                            <p>Posted 2 days ago</p>
                        </div>
                    </div>
                </div>
                <div className={cx('menu')}>Menu</div>
            </div>
        </div>
    );
};

export default Single;
