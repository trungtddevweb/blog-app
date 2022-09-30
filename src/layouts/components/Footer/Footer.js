import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <p>Memory - Sharing your life . Thank all for visit! Have a good day ❤️ </p>
                <div className={cx('list')}>
                    <p>Contact with me:</p>
                    <Button href="https://www.facebook.com/trung02032001" target="_blank" className={cx('item')}>
                        <FontAwesomeIcon color="#1877f2" icon={faFacebook} />
                    </Button>
                    <Button
                        href="https://www.instagram.com/sherwintran01/?hl=en"
                        target="_blank"
                        className={cx('item')}
                    >
                        <FontAwesomeIcon color="#fd1d1d" icon={faInstagram} />
                    </Button>
                    <Button
                        href="https://www.youtube.com/channel/UCWgAcYbQqpri-nLTEQwiY7g"
                        target="_blank"
                        className={cx('item')}
                    >
                        <FontAwesomeIcon color="#ff0000" icon={faYoutube} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
