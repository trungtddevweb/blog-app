import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

const Sidebar = ({ cat }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [cat]);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Một số bài viết có thể bạn sẽ thích</h1>

            {posts.map((post) => (
                <div key={post._id} className={cx('post')}>
                    <Image className={cx('img')} src={post.img} alt={post.title} />
                    <p className={cx('title')}>{post.title}</p>
                    <Button className={cx('btn')}>Đọc ngay</Button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
