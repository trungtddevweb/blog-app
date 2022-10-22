import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/assets/imgs';
import Button from '~/components/Button';
import config from '~/config';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { AuthContext } from '~/context/authContext';

const cx = classNames.bind(styles);

const Header = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };
    console.log(show);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img className={cx('img')} src={imgs.logo} alt="Memory" />
                    </Link>
                </div>
                {!show ? (
                    <FontAwesomeIcon
                        onClick={(prev) => setShow((prev) => !prev)}
                        className={cx('btn-show')}
                        icon={faBars}
                    />
                ) : (
                    <FontAwesomeIcon
                        onClick={(prev) => setShow((prev) => !prev)}
                        className={cx('btn-show')}
                        icon={faXmark}
                    />
                )}
                <nav className={cx('navigation', { show })}>
                    <Link to={`/?cat=art`}>
                        <div className={cx('item')}>ART</div>
                    </Link>
                    <Link to={`/?cat=music`}>
                        <div className={cx('item')}>MUSIC</div>
                    </Link>
                    <Link to={`/?cat=life`}>
                        <div className={cx('item')}>LIFE</div>
                    </Link>
                    <Link to={`/?cat=work`}>
                        <div className={cx('item')}>WORK</div>
                    </Link>
                    <Link to={`/?cat=love`}>
                        <div className={cx('item')}>LOVE</div>
                    </Link>
                    <Link to={`/?cat=study`}>
                        <div className={cx('item')}>STUDY</div>
                    </Link>
                    <Link to={`/?cat=sad`}>
                        <div className={cx('item')}>SAD</div>
                    </Link>
                    {currentUser ? (
                        <Tippy
                            interactive
                            placement="bottom-end"
                            duration={[275, 200]}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <Button className={cx('btn')} to={config.routes.write}>
                                            Write
                                        </Button>
                                        <Button
                                            rightIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                                            className={cx('log-out')}
                                            onClick={handleLogout}
                                        >
                                            Log out
                                        </Button>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('item', { currentUser })}>
                                <img alt="Avatar" className={cx('avt')} src={currentUser.details.image} />
                                <span>{currentUser.details.username}</span>
                            </div>
                        </Tippy>
                    ) : (
                        <Button to={config.routes.login} primary>
                            LOGIN
                        </Button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
