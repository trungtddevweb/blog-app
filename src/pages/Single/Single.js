import styles from './Single.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Menu from '~/layouts/components/Menu';

const cx = classNames.bind(styles);

const Single = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Image
                        className={cx('image')}
                        src="https://i.pinimg.com/originals/14/ad/5c/14ad5c1e0e5eeccba9b5c122245ee36c.jpg"
                        alt="Image"
                    />
                    <div className={cx('user')}>
                        <div className={cx('section')}>
                            <Image
                                className={cx('avt')}
                                src="https://i.pinimg.com/564x/61/10/f0/6110f0d1c68fc446d9d7210c82caa9c6.jpg"
                            />
                            <div className={cx('info')}>
                                <span>Trung</span>
                                <p>Posted 2 days ago</p>
                            </div>
                        </div>
                        <div className={cx('section')}>
                            <Link to={`/write?edit=2`}>
                                <FontAwesomeIcon color="blue" className={cx('icon')} icon={faEdit} />
                            </Link>

                            <FontAwesomeIcon color="red" className={cx('icon')} icon={faTrash} />
                        </div>
                    </div>
                    <h1 className={cx('heading')}>NGƯỜI ẤY NHẤT ĐỊNH SẼ ĐẾN, XIN BẠN HÃY KIÊN TRÌ!</h1>
                    <p className={cx('content-text')}>
                        Sau này, nhất định sẽ có một người chủ động nói lời yêu thương với bạn, dành cho bạn những gì
                        tốt đẹp nhất. Sau này, nhất định sẽ có một người chịu được những tính xấu của bạn, có thể ở bên
                        cạnh bạn kể cả lúc bạn trong bộ dạng không xinh đẹp. Sau này, nhất định sẽ có một người luôn
                        quan tâm đến cảm xúc của bạn, sẽ không để bạn ở một mình những lúc buồn tủi. Sau này, nhất định
                        sẽ có một người luôn nhắn tin cho bạn mỗi ngày, luôn đợi bạn mỗi tối khi đi làm về.
                        <br />
                        <br />
                        Dù cuộc sống hiện tại của bạn có đau khổ đến cùng cực, bạn mất hết dũng khí để bắt đầu một tình
                        yêu mới. Hãy nghe tôi nói, khi tất thảy mọi thứ trên thế giới này mất đi thì bạn vẫn còn tương
                        lai phía trước. Chúng ta ai rồi cũng phải học cách “buông tha” cho quá khứ và làm bạn với hiện
                        tại. Tôi không biết những mối tình trước của bạn khắc cốt ghi tâm như thế nào nhưng ngay từ bây
                        giờ, hãy gói ghém chúng lại cất vào ngăn khóa của ký ức và sẵn sàng đón nhận một mối quan hệ
                        mới. Trên đời này, chúng ta chẳng ai biết trước được điều gì.
                        <br />
                        <br />
                        Giống như khoảnh khắc bắt gặp ánh mắt của một người làm trái tim bạn nhảy múa hay chỉ vì một nụ
                        cười của ai đó cũng có thể làm bạn mất ngủ cả đêm. Tình yêu biến hai người từ xa lạ trở nên thân
                        quen. Thời gian chưa từng làm con người thất vọng, nó dạy cho chúng ta cách làm một người trưởng
                        thành, cách chấp nhận cuộc sống. Cả một đời người dài như thế, để gặp được đúng người không phải
                        muốn là có thể gặp được ngay.
                        <br />
                        <br />
                        Vậy tại sao không tranh thủ thời gian khi người ấy chưa xuất hiện chăm chút lại bản thân? Yêu
                        thương và chăm sóc bản thân thật tốt, người cần đến rồi sẽ đến. Đừng vì một đoạn tình cảm không
                        ra gì liền cho rằng tất cả tình yêu trên thế giới này đều là vớ vẩn. Tình yêu vẫn luôn đẹp chỉ
                        là bạn chưa gặp đúng người. Hãy tin rằng, người ấy rồi sẽ đến tô vẽ hạnh phúc cùng bạn. Nếu hiện
                        tại người ấy vẫn chưa xuất hiện, xin bạn đừng sốt ruột, hãy kiên trì! Dương Hạnh Hãy tôn trọng
                        người viết – mang bài đi nơi khác nhớ viết nguồn
                    </p>
                </div>
                <div className={cx('menu')}>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Single;
