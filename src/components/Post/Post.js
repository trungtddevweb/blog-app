import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

const Post = ({ post }) => {
    return (
        <>
            <Image src={post.src} alt={post.title} className={cx('img')} />
            <div className={cx('content')}>
                <h3 className={cx('heading')}>{post.title}</h3>
                <p className={cx('excerpt')}>{post.content}</p>
                <div className={cx('author')}>
                    <div className={cx('cate')}>
                        <div className={cx('col')}>
                            <span>Category: </span>
                            <span className={cx('category')}>{post.category}</span>
                        </div>
                        <div className={cx('col')}>
                            <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                            <span className={cx('text')}>{post.createdAt}</span>
                        </div>
                    </div>
                    <div className={cx('user')}>
                        <FontAwesomeIcon color="gray" icon={faUser} />
                        <span className={cx('text')}>{post.author}</span>
                    </div>
                </div>
                <Button className={cx('btn')} to={`/post/${post.id}`}>
                    Đọc tiếp
                </Button>
            </div>
        </>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Post;
