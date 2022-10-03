import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Sidebar = () => {
    const posts = [
        {
            id: 1,
            src: 'https://i.pinimg.com/564x/81/88/ea/8188eaec56bc1c09fa6df311417ca098.jpg',
            title: 'NÊN HAY KHÔNG VIỆC KHỞI NGHIỆP SỚM?',
            content:
                'Thật ra có rất nhiều cách định nghĩa về khái niệm “khởi nghiệp”, ví dụ như bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Đó là khởi nghiệp! Xu hướng khởi nghiệp đang phổ biến ở giới trẻ hiện nay với ý chí làm giàu mãnh liệt. Nhưng khởi nghiệp chưa bao giờ dễ dàng. Khởi nghiệp sớm khi chưa có kinh nghiệm gì rất dễ dẫn đến thất bại. Vậy ta đặt ra câu hỏi có nên khởi nghiệp sớm hay không? Mình có đọc một khảo sát của những người giàu khi được phỏng vấn về việc nên khởi nghiệp sớm hay không trong cuốn sách “Đọc vị tâm lý hành vi của giới giàu và siêu giàu”. Đa số tất cả đều nhận định rằng nên khởi nghiệp sớm; nhưng sớm ở đây không nằm ở thời gian tuổi trẻ mà nằm ở thời gian - kinh nghiệm học hỏi nhanh chóng của bản thân. Khởi nghiệp sớm ở đây không phải là khởi nghiệp khi ta mới 20-25 tuổi mà khởi nghiệp khi ta nhận ra mình đã tích lũy đủ kinh nghiệm và chấp nhận những rủi ro đầu tiên của cuộc đời. Nếu nhìn một cách tổng quan, mình nghĩ rằng việc khởi nghiệp sớm nên hay không thật sự không quan trọng bằng việc bản thân đã tích lũy đủ kinh nghiệm sống hay chưa. Kinh nghiệm là yếu tố quan trọng, nhưng đây là những thứ không phải có thể học được trên ghế nhà trường mà đòi hỏi bạn cần có những trải nghiệm thực tế. Đặc biệt đề cao sự chủ động của bản thân trước các vấn đề thay vì bị động đón nhận nó. Nếu xem khởi nghiệp là cả một hành trình dài đầy thử thách thì bạn cần phải bắt đầu từ cái cốt lõi và căn bản nhất. Khởi nghiệp là bắt đầu vào một hành trình có tính mạo hiểm và độ rủi ro cao và không phải cũng thích hợp để khởi nghiệp. Chính vì vậy, nếu bạn đang tập tễnh bước đi trên con đường này thì bạn cũng phải có những bài kiểm tra để quyết định có nên khởi nghiệp sớm hay không?',
            category: ['Life', 'Work'],
            createdAt: '22/09/2022',
            author: 'Bach Giaa',
        },
        {
            id: 2,
            src: 'https://i.pinimg.com/564x/81/88/ea/8188eaec56bc1c09fa6df311417ca098.jpg',
            title: 'NÊN HAY KHÔNG VIỆC KHỞI NGHIỆP SỚM?',
            content:
                'Thật ra có rất nhiều cách định nghĩa về khái niệm “khởi nghiệp”, ví dụ như bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Đó là khởi nghiệp! Xu hướng khởi nghiệp đang phổ biến ở giới trẻ hiện nay với ý chí làm giàu mãnh liệt. Nhưng khởi nghiệp chưa bao giờ dễ dàng. Khởi nghiệp sớm khi chưa có kinh nghiệm gì rất dễ dẫn đến thất bại. Vậy ta đặt ra câu hỏi có nên khởi nghiệp sớm hay không? Mình có đọc một khảo sát của những người giàu khi được phỏng vấn về việc nên khởi nghiệp sớm hay không trong cuốn sách “Đọc vị tâm lý hành vi của giới giàu và siêu giàu”. Đa số tất cả đều nhận định rằng nên khởi nghiệp sớm; nhưng sớm ở đây không nằm ở thời gian tuổi trẻ mà nằm ở thời gian - kinh nghiệm học hỏi nhanh chóng của bản thân. Khởi nghiệp sớm ở đây không phải là khởi nghiệp khi ta mới 20-25 tuổi mà khởi nghiệp khi ta nhận ra mình đã tích lũy đủ kinh nghiệm và chấp nhận những rủi ro đầu tiên của cuộc đời. Nếu nhìn một cách tổng quan, mình nghĩ rằng việc khởi nghiệp sớm nên hay không thật sự không quan trọng bằng việc bản thân đã tích lũy đủ kinh nghiệm sống hay chưa. Kinh nghiệm là yếu tố quan trọng, nhưng đây là những thứ không phải có thể học được trên ghế nhà trường mà đòi hỏi bạn cần có những trải nghiệm thực tế. Đặc biệt đề cao sự chủ động của bản thân trước các vấn đề thay vì bị động đón nhận nó. Nếu xem khởi nghiệp là cả một hành trình dài đầy thử thách thì bạn cần phải bắt đầu từ cái cốt lõi và căn bản nhất. Khởi nghiệp là bắt đầu vào một hành trình có tính mạo hiểm và độ rủi ro cao và không phải cũng thích hợp để khởi nghiệp. Chính vì vậy, nếu bạn đang tập tễnh bước đi trên con đường này thì bạn cũng phải có những bài kiểm tra để quyết định có nên khởi nghiệp sớm hay không?',
            category: ['Life', 'Work'],
            createdAt: '22/09/2022',
            author: 'Bach Giaa',
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/564x/81/88/ea/8188eaec56bc1c09fa6df311417ca098.jpg',
            title: 'NÊN HAY KHÔNG VIỆC KHỞI NGHIỆP SỚM?',
            content:
                'Thật ra có rất nhiều cách định nghĩa về khái niệm “khởi nghiệp”, ví dụ như bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Đó là khởi nghiệp! Xu hướng khởi nghiệp đang phổ biến ở giới trẻ hiện nay với ý chí làm giàu mãnh liệt. Nhưng khởi nghiệp chưa bao giờ dễ dàng. Khởi nghiệp sớm khi chưa có kinh nghiệm gì rất dễ dẫn đến thất bại. Vậy ta đặt ra câu hỏi có nên khởi nghiệp sớm hay không? Mình có đọc một khảo sát của những người giàu khi được phỏng vấn về việc nên khởi nghiệp sớm hay không trong cuốn sách “Đọc vị tâm lý hành vi của giới giàu và siêu giàu”. Đa số tất cả đều nhận định rằng nên khởi nghiệp sớm; nhưng sớm ở đây không nằm ở thời gian tuổi trẻ mà nằm ở thời gian - kinh nghiệm học hỏi nhanh chóng của bản thân. Khởi nghiệp sớm ở đây không phải là khởi nghiệp khi ta mới 20-25 tuổi mà khởi nghiệp khi ta nhận ra mình đã tích lũy đủ kinh nghiệm và chấp nhận những rủi ro đầu tiên của cuộc đời. Nếu nhìn một cách tổng quan, mình nghĩ rằng việc khởi nghiệp sớm nên hay không thật sự không quan trọng bằng việc bản thân đã tích lũy đủ kinh nghiệm sống hay chưa. Kinh nghiệm là yếu tố quan trọng, nhưng đây là những thứ không phải có thể học được trên ghế nhà trường mà đòi hỏi bạn cần có những trải nghiệm thực tế. Đặc biệt đề cao sự chủ động của bản thân trước các vấn đề thay vì bị động đón nhận nó. Nếu xem khởi nghiệp là cả một hành trình dài đầy thử thách thì bạn cần phải bắt đầu từ cái cốt lõi và căn bản nhất. Khởi nghiệp là bắt đầu vào một hành trình có tính mạo hiểm và độ rủi ro cao và không phải cũng thích hợp để khởi nghiệp. Chính vì vậy, nếu bạn đang tập tễnh bước đi trên con đường này thì bạn cũng phải có những bài kiểm tra để quyết định có nên khởi nghiệp sớm hay không?',
            category: ['Life', 'Work'],
            createdAt: '22/09/2022',
            author: 'Bach Giaa',
        },
        {
            id: 4,
            src: 'https://i.pinimg.com/564x/81/88/ea/8188eaec56bc1c09fa6df311417ca098.jpg',
            title: 'NÊN HAY KHÔNG VIỆC KHỞI NGHIỆP SỚM?',
            content:
                'Thật ra có rất nhiều cách định nghĩa về khái niệm “khởi nghiệp”, ví dụ như bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Đó là khởi nghiệp! Xu hướng khởi nghiệp đang phổ biến ở giới trẻ hiện nay với ý chí làm giàu mãnh liệt. Nhưng khởi nghiệp chưa bao giờ dễ dàng. Khởi nghiệp sớm khi chưa có kinh nghiệm gì rất dễ dẫn đến thất bại. Vậy ta đặt ra câu hỏi có nên khởi nghiệp sớm hay không? Mình có đọc một khảo sát của những người giàu khi được phỏng vấn về việc nên khởi nghiệp sớm hay không trong cuốn sách “Đọc vị tâm lý hành vi của giới giàu và siêu giàu”. Đa số tất cả đều nhận định rằng nên khởi nghiệp sớm; nhưng sớm ở đây không nằm ở thời gian tuổi trẻ mà nằm ở thời gian - kinh nghiệm học hỏi nhanh chóng của bản thân. Khởi nghiệp sớm ở đây không phải là khởi nghiệp khi ta mới 20-25 tuổi mà khởi nghiệp khi ta nhận ra mình đã tích lũy đủ kinh nghiệm và chấp nhận những rủi ro đầu tiên của cuộc đời. Nếu nhìn một cách tổng quan, mình nghĩ rằng việc khởi nghiệp sớm nên hay không thật sự không quan trọng bằng việc bản thân đã tích lũy đủ kinh nghiệm sống hay chưa. Kinh nghiệm là yếu tố quan trọng, nhưng đây là những thứ không phải có thể học được trên ghế nhà trường mà đòi hỏi bạn cần có những trải nghiệm thực tế. Đặc biệt đề cao sự chủ động của bản thân trước các vấn đề thay vì bị động đón nhận nó. Nếu xem khởi nghiệp là cả một hành trình dài đầy thử thách thì bạn cần phải bắt đầu từ cái cốt lõi và căn bản nhất. Khởi nghiệp là bắt đầu vào một hành trình có tính mạo hiểm và độ rủi ro cao và không phải cũng thích hợp để khởi nghiệp. Chính vì vậy, nếu bạn đang tập tễnh bước đi trên con đường này thì bạn cũng phải có những bài kiểm tra để quyết định có nên khởi nghiệp sớm hay không?',
            category: ['Life', 'Work'],
            createdAt: '22/09/2022',
            author: 'Bach Giaa',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading  ')}>Một số bài viết có thể bạn sẽ thích</h1>

            {posts.map((post) => (
                <div key={post.id} className={cx('post')}>
                    <Image className={cx('img')} src={post.src} alt={post.title} />
                    <p className={cx('title')}>{post.title}</p>
                    <Button className={cx('btn')}>Đọc ngay</Button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
