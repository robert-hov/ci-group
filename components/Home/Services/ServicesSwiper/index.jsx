import React, {useRef, useState} from "react";
import styles from "./style.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import useTranslation from "next-translate/useTranslation";

const ServicesSwiper = ({content}) => {
    const swiperRef = useRef();
    const [disabled, setDisabled] = useState({isBeggining: true, isEnd: false});
    const {t} = useTranslation('common')

    return (
        <>
      <div className={styles.servicesSwiperContainer}>
        <button
            className={`${styles.servicesSwiperButtonPrev}${
                disabled.isBeggining ? ` ${styles.servicesSwiperButtonPrev_disabled}` : ""
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
            slidesPerView={3}
            spaceBetween={40}
            pagination={true}
            modules={[Pagination]}
            onSlideChange={(swiper) => {
                setDisabled({
                    isEnd: swiper.isEnd,
                    isBeggining: swiper.isBeginning,
                });
            }}
            className={styles.servicesSwiper}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                512: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
        >
          {content.map((el, i) => {
              return (
                  <SwiperSlide key={i} className={styles.servicesSlide}>
                      <div className={styles.servicesSlideContent}>
                          <div className={styles.servicesSlideImg}>
                              <div className="img-container">
                                  <svg className="icon">
                                      <use xlinkHref={`#${el.icon?.hrefLink}`}></use>
                                  </svg>
                              </div>
                          </div>
                          <div className={styles.servicesSlideTextContainer}>
                              <span className={styles.servicesSlideText}>{t(el.content)}</span>
                          </div>
                      </div>
                  </SwiperSlide>
              );
          })}
        </Swiper>
        <button
            className={`${styles.servicesSwiperButtonNext}${
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
    </>
    );
};

export default ServicesSwiper;
