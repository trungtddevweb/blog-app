import styles from './Write.module.scss';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '~/components/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '~/context/authContext';

const cx = classNames.bind(styles);

const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || '');
    const [title, setTitle] = useState(state?.title || '');
    const [cat, setCat] = useState(state?.cate || '');
    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const navigate = useNavigate();
    // const [url, setUrl] = useState('');

    //Check user
    const { currentUser } = useContext(AuthContext);
    const { username, email } = currentUser.details;

    useEffect(() => {
        if (!currentUser) return navigate('/login');
    }, [currentUser, navigate]);

    // Handle
    const validateImg = (e) => {
        const file = e.target.files[0];
        if (file.size > 1048576) {
            return alert('Max file size is 1mb');
        } else {
            setImage(file);
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

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            if (!image) return alert('Ảnh bài viết không thể để trống!');
            const urlImg = await uploadImage(image);
            state
                ? await axios.put(`/posts/${state.id}`, {
                      title,
                      content: value,
                      cat,
                      img: urlImg,
                      author: username,
                      email,
                  })
                : await axios.post(`/posts/`, {
                      title,
                      content: value,
                      cat,
                      img: urlImg,
                      author: username,
                      email,
                      date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                  });
            navigate('/');
        } catch (err) {
            console.log(err.response.data);
        }
    };
    console.log(state);
    // Handle Category
    const handleCate = (e) => {
        setCat(e.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <input
                    type="text"
                    className={cx('input-title')}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <div className={cx('edit-container')}>
                    <ReactQuill className={cx('editor')} theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('item')}>
                    {uploadingImg ? <div>Đang đăng bài...</div> : <h2 className={cx('heading')}>Đăng bài</h2>}
                    <span className={cx('status')}>
                        <b>Trạng thái: </b> Bản nháp
                    </span>
                    <span className={cx('status')}>
                        <b>Visibility: </b> Công khai
                    </span>
                    <input className={cx('choose-file')} onChange={validateImg} type="file" id="file" />
                    <label className={cx('text-choose')} htmlFor="file">
                        Chọn hình ảnh
                    </label>
                    <div className={cx('buttons')}>
                        <Button className={cx('btn')}>Lưu bản nháp</Button>
                        <Button className={cx('btn')} onClick={handleClick}>
                            Đăng bài
                        </Button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h2 className={cx('heading')}>Category</h2>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'art'}
                            id="art"
                            type="radio"
                            name="cat"
                            value="art"
                            onChange={handleCate}
                        />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'music'}
                            id="music"
                            type="radio"
                            name="cat"
                            value="music"
                            onChange={handleCate}
                        />
                        <label htmlFor="music">Music</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'life'}
                            id="life"
                            type="radio"
                            name="cat"
                            value="life"
                            onChange={handleCate}
                        />
                        <label htmlFor="life">Life</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'work'}
                            id="work"
                            type="radio"
                            name="cat"
                            value="work"
                            onChange={handleCate}
                        />
                        <label htmlFor="work">Work</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'love'}
                            id="love"
                            type="radio"
                            name="cat"
                            value="love"
                            onChange={handleCate}
                        />
                        <label htmlFor="love">Love</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'study'}
                            id="study"
                            type="radio"
                            name="cat"
                            value="study"
                            onChange={handleCate}
                        />
                        <label htmlFor="study">Study</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input
                            checked={cat === 'sad'}
                            id="sad"
                            type="radio"
                            name="cat"
                            value="sad"
                            onChange={handleCate}
                        />
                        <label htmlFor="sad">Sad</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
