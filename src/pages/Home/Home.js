import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Post from '~/components/Post';
import axios from 'axios';
import { AuthContext } from '~/context/authContext';
import Button from '~/components/Button';
import config from '~/config';
import imgs from '~/assets/imgs';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const cat = useLocation().search;
    const title = cat.slice(5) || 'Tất cả';
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    // Fetch API
    useEffect(() => {
        // Fetch posts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
        // Check user
        if (!currentUser) return navigate('/login');
    }, [cat, currentUser, navigate]);
    // Pagination
    const itemsPerPage = 5;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, posts]);
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <p className={cx('title')}>
                        Category: <span>{title}</span>
                    </p>
                    {loading && (
                        <div className={cx('loading')}>
                            <img src={imgs.logo} alt="Loading" />
                            <p>Loading...</p>
                        </div>
                    )}
                    {posts === null ||
                        (posts.length === 0 && (
                            <div className={cx('nothing')}>
                                <p>Hiện chưa có bài viết nào!</p>
                                <Button className={cx('btn')} to={config.routes.write}>
                                    Viết bài ngay
                                </Button>
                            </div>
                        ))}
                    <div className={cx('list-post')}>
                        {currentItems.map((post) => (
                            <div key={post._id} className={cx('post')}>
                                <Post post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ReactPaginate
                className={cx('paginate')}
                breakLabel="..."
                nextLabel={<FontAwesomeIcon icon={faArrowRight} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<FontAwesomeIcon icon={faArrowLeft} />}
                renderOnZeroPageCount={null}
                pageClassName={cx('page-item')}
                activeClassName={cx('page-active')}
                disabledLinkClassName={cx('page-disabled-link')}
                nextLinkClassName={cx('next-link')}
                previousClassName={cx('previous-link')}
                onClick={goTop()}
            />
        </>
    );
};

export default Home;
