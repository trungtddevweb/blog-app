import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button';
import { faEnvelope, faLock, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '~/config';
import axios from 'axios';
import imgs from '~/assets/imgs/index';

const cx = classNames.bind(styles);

const Register = () => {
    // State
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    // Image upload state
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const navigate = useNavigate();
    // Hanlder

    // Upload image
    const validateImg = (e) => {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            return alert('Max file size is 1mb');
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const uploadImage = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'trung02032001');

        try {
            setUploadingImg(true);
            let res = await fetch('https://api.cloudinary.com/v1_1/dltqtt0ph/image/upload', {
                method: 'POST',
                body: data,
            });
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url;
        } catch (err) {
            setUploadingImg(false);
            console.log(err);
        }
    };

    // Handle

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!image) return alert('Please upload your profile picture');
            const url = await uploadImage(image);
            // setUrl(url);
            await axios.post('https://memory-app-blog.herokuapp.com/api/auth/register', {
                email,
                username,
                password,
                image: url,
            });
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
                    <div className={cx('choose-image')}>
                        <img alt="" src={imagePreview || imgs.userImg} className={cx('signup-profile-pic')} />
                        <label htmlFor="image-upload" className={cx('image-upload-label')}>
                            <FontAwesomeIcon className={cx('add-picture-icon')} icon={faPlus} />
                        </label>
                        <input
                            type="file"
                            id="image-upload"
                            hidden
                            accept="image/png, image/jpeg"
                            onChange={validateImg}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                            className={cx('input')}
                            type="text"
                            required
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                        <input
                            className={cx('input')}
                            type="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('row')}>
                        <i>
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                            className={cx('input')}
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button onClick={handleSubmit} className={cx('btn-login')}>
                        {uploadingImg ? <div>Loading...</div> : <>Đăng kí</>}
                    </Button>

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
