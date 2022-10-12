import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/assets/imgs';
import Button from '~/components/Button';
import config from '~/config';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AuthContext } from '~/context/authContext';

const cx = classNames.bind(styles);

const Header = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img className={cx('img')} src={imgs.logo} alt="Memory" />
                    </Link>
                </div>
                <nav className={cx('navigation')}>
                    <div className={cx('item')}>
                        <Button to={`/?cat=art`}>ART</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=music`}>MUSIC</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=life`}>LIFE</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=work`}>WORK</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=love`}>LOVE</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=study`}>STUDY</Button>
                    </div>
                    <div className={cx('item')}>
                        <Button to={`/?cat=sad`}>SAD</Button>
                    </div>
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
                                <img
                                    alt={currentUser.username}
                                    className={cx('avt')}
                                    src={'https://i.pinimg.com/564x/61/10/f0/6110f0d1c68fc446d9d7210c82caa9c6.jpg'}
                                />
                                <span>{currentUser.username}</span>
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
