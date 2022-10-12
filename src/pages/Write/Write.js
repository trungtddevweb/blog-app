import styles from './Write.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '~/components/Button';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

const Write = () => {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || '');
    const [title, setTitle] = useState(state?.title || '');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cate || '');
    const navigate = useNavigate();

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('/upload', formData);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            state
                ? await axios.put(`/posts/${state.id}`, {
                      title,
                      desc: value,
                      cat,
                      img: file ? imgUrl : '',
                  })
                : await axios.post(`/posts/`, {
                      title,
                      desc: value,
                      cat,
                      img: file ? imgUrl : '',
                      date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
                  });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };
    console.log(value);
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
                    <h2 className={cx('heading')}>Đăng bài</h2>
                    <span className={cx('status')}>
                        <b>Trạng thái: </b> Bản nháp
                    </span>
                    <span className={cx('status')}>
                        <b>Visibility: </b> Công khai
                    </span>
                    <input
                        className={cx('choose-file')}
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        id="file"
                    />
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
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
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="sad">Sad</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
