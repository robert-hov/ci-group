import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./style.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Pagination} from "swiper";

const PartnersSwiper = ({content}) => {
    const swiperRef = useRef();
    const [disabled, setDisabled] = useState({isBeggining: true, isEnd: false});

    return (
        <div className={styles.partnersSwiperContainer}>
            <button
                className={`${styles.partnersSwiperButtonNext}${
                    disabled.isBeggining ? ` ${styles.disabled}` : ""
                }`}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <span className="img-container">
                    <svg className="icon">
                        <use xlinkHref="#arrowLeft"></use>
                    </svg>
                </span>
            </button>
            <Swiper
                onSlideChange={(swiper) => {
                    setDisabled({
                        isEnd: swiper.isEnd,
                        isBeggining: swiper.isBeginning,
                    });
                }}
                className={styles.partnersSwiper}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 3.2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                {content.map((el, i) => {
                    return (
                        <SwiperSlide key={i} className={styles.partnersSlide}>
                            <a href={el.link} className={styles.partnersSlideImg}>
                                <span className="img-container">
                                    <img src={el.img.src} alt={el.alt}/>
                                </span>
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <button
                className={`${styles.partnersSwiperButtonNext}${
                    disabled.isEnd ? ` ${styles.disabled}` : ""
                }`}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <span className="img-container">
                    <svg className="icon">
                        <use xlinkHref="#arrowRight"></use>
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default PartnersSwiper;
