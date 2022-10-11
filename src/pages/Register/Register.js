import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import config from '~/config';
import axios from 'axios';

const cx = classNames.bind(styles);

const Register = () => {
    // State
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    // Hanlder
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/register', inputs);
            navigate('/login');
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h3 children={cx('title')}>Đăng ký</h3>
                    {error && <span className={cx('error')}>{error}</span>}
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                            className={cx('input')}
                            type="text"
                            required={true}
                            placeholder="Name"
                            name="username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                        <input
                            className={cx('input')}
                            type="email"
                            required={true}
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                            className={cx('input')}
                            type="password"
                            required={true}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <Button onClick={handleSubmit} className={cx('btn-login')}>
                        Đăng ký
                    </Button>
                    <p className={cx('text-with')}>Hoặc đăng ký với</p>
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
                            Đã có tài khoản ?
                            <Link className={cx('link')} to={config.routes.login}>
                                Đăng nhập ngay
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
