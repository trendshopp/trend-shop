import styles from './style.module.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperTab = () => {

    return (
        <div className={styles.main}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={12}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className={styles.eachSlider}>
                        <a href="/produtos/jogos/jogos-de-ps4">
                            <img src="./images/descontops4.png" alt="" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperTab;