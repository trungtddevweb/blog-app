import styles from './Write.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Write = () => {
    const [value, setValue] = useState('');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <input type="text" className={cx('input-title')} placeholder="Title" />
                <div className={cx('edit-container')}>
                    <ReactQuill className={cx('editor')} theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('item')}>
                    <h2 className={cx('heading')}>Đăng bài</h2>
                    <span className={cx('status')}>
                        <b>Status: </b> Draft
                    </span>
                    <span className={cx('status')}>
                        <b>Visibility: </b> Public
                    </span>
                    <input className={cx('choose-file')} type="file" id="file" />
                    <label className={cx('text-choose')} htmlFor="file">
                        Chọn hình ảnh
                    </label>
                    <div className={cx('buttons')}>
                        <Button className={cx('btn')}>Save as draft</Button>
                        <Button className={cx('btn')}>Update</Button>
                    </div>
                </div>
                <div className={cx('item')}>
                    <h2 className={cx('heading')}>Category</h2>
                    <div className={cx('wrapper-item')}>
                        <input id="art" type="radio" name="category" value="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="music" type="radio" name="category" value="music" />
                        <label htmlFor="music">Music</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="life" type="radio" name="category" value="life" />
                        <label htmlFor="life">Life</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="work" type="radio" name="category" value="work" />
                        <label htmlFor="work">Work</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="love" type="radio" name="category" value="love" />
                        <label htmlFor="love">Love</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="study" type="radio" name="category" value="study" />
                        <label htmlFor="study">Study</label>
                    </div>
                    <div className={cx('wrapper-item')}>
                        <input id="sad" type="radio" name="category" value="sad" />
                        <label htmlFor="sad">Sad</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
