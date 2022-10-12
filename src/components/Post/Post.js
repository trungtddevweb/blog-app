import PropTypes from 'prop-types';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import moment from 'moment';
import { getText } from '~/untils/getText';

const cx = classNames.bind(styles);

const Post = ({ post }) => {
    return (
        <>
            <Image src={`./upload/${post.img}`} alt={post.title} className={cx('img')} />
            <div className={cx('content')}>
                <h3 className={cx('heading')}>{post.title}</h3>
                <p className={cx('desc')}>{getText(post.desc)}</p>
                <div className={cx('author')}>
                    <div className={cx('cate')}>
                        <div className={cx('col')}>
                            <span>Category: </span>
                            <span className={cx('category')}>{post.cat}</span>
                        </div>
                        <div className={cx('col')}>
                            <FontAwesomeIcon color="orange" icon={faCalendarDays} />
                            <span className={cx('text')}>{moment(post.date).fromNow()}</span>
                        </div>
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
