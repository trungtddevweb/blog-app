import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Post from '~/components/Post';
import axios from 'axios';

const cx = classNames.bind(styles);

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [cat]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('list-post')}>
                    {posts.map((post) => (
                        <div key={post.id} className={cx('post')}>
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
