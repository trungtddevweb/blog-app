import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';
import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle the login
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')} method="POST">
                    <h3 children={cx('title')}>Đăng nhập</h3>
                    {/* <p className={cx('error')}>Sai tên đăng nhập hoặc mật khẩu! </p> */}
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                            onChange={handleEmail}
                            className={cx('input')}
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                            onChange={handlePassword}
                            className={cx('input')}
                            type="password"
                            placeholder="Password"
                            value={password}
                        />
                    </div>
                    <p className={cx('text')}>Quên mật khẩu?</p>
                    <Button className={cx('btn-login')}>Đăng nhập</Button>
                    <p className={cx('text-with')}>Hoặc đăng nhập với</p>
                    <div className={cx('social-login')}>
                        <div className={cx('col')}>
                            <i>
                                <FaFacebookF />
                            </i>
                            <p>Facebook</p>
                        </div>
                        <div className={cx('col')}>
                            <i>
                                <FaInstagram />
                            </i>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className={cx('text')}>
                        <p>
                            Chưa có tài khoản ?
                            <Link className={cx('link')} to={config.routes.register}>
                                Đăng ký ngay
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
