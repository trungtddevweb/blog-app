import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '~/layouts/components/Menu';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '~/context/authContext';
import DOMPurify from 'dompurify';

const cx = classNames.bind(styles);

const Single = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://memory-app-blog.herokuapp.com/api/posts/${postId}`);
                setPost(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, [postId]);
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
            <div className={cx('wrapper-animation')}>
                <div className={cx('loadingio-spinner-dual-ball-3f6tj67ctil')}>
                    <div className={cx('ldio-be45kgc28r4')}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Image className={cx('image')} src={post.img} alt={post.title} />
                    <div className={cx('user')}>
                        <div className={cx('section')}>
                            {currentUser.details.image && (
                                <Image className={cx('avt')} src={currentUser.details.image} />
                            )}
                            <div className={cx('info')}>
                                <span>{post.author}</span>
                                <p>Posted {moment(post.createdAt).fromNow()}</p>
                            </div>
                        </div>
                        {currentUser.details.email === post.email && (
                            <div className={cx('section')}>
                                <Link state={post} to={`/write?edit=${postId}`}>
                                    <FontAwesomeIcon color="blue" className={cx('icon')} icon={faEdit} />
                                </Link>

                                <FontAwesomeIcon
                                    onClick={handleDelete}
                                    color="red"
                                    className={cx('icon')}
                                    icon={faTrash}
                                />
                            </div>
                        )}
                    </div>
                    <h1 className={cx('heading')}>{post.title}</h1>
                    <p
                        className={cx('desc')}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.content),
                        }}
                    ></p>
                </div>
                <div className={cx('menu')}>
                    <Menu cat={post.cat} />
                </div>
            </div>
        </div>
    );
};

export default Single;
