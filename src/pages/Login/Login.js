import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Button from '~/components/Button';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { useContext, useState } from 'react';
import { AuthContext } from '~/context/authContext';

const cx = classNames.bind(styles);

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    // Handle the login
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(inputs);
            setLoading(false);
            navigate('/');
        } catch (error) {
            setError(error.response.data);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h3 children={cx('title')}>Đăng nhập</h3>
                    {error && <div className={cx('error')}>{error}</div>}
                    <p className={cx('error')}></p>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                            onChange={handleChange}
                            className={cx('input')}
                            type="text"
                            required
                            placeholder="Email"
                            name="email"
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                            name="password"
                            onChange={handleChange}
                            className={cx('input')}
                            type="password"
                            required
                            placeholder="Password"
                        />
                    </div>
                    <p className={cx('text')}>Quên mật khẩu?</p>
                    <Button className={cx('btn-login')} onClick={handleSubmit}>
                        {loading ? <>Đang đăng nhập...</> : <>Đăng nhập</>}
                    </Button>
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
