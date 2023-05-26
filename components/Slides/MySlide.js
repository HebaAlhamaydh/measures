import React, { useRef } from "react";
import CardSlide from "./CardSlide";
import data from "../../data";
import styles from "../../styles/MySlide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";

export default function MySlide() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <h2 className={styles.title}>
        لأن صحتك النفسية مهمة تعرف على مستواها باستخدام المقاييس من
        <span> كيورا</span>
        <p className={styles.note}>
          تنويه: هذه الاختبارات ليست أداة تشخيص أو أداة علاجية و لا تغني عن جلسة
          الطبيب أو المعالج النفسي
        </p>
      </h2>
      <Swiper
        // spaceBetween={5}
        slidesPerView={4}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          770: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <CardSlide
              key={card.id}
              backgroundColor={card.backgroundColor}
              cardTitle={card.cardTitle}
              cardIcon={card.cardIcon}
              cardTime={card.cardTime}
            ></CardSlide>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-navigation">
        <div className="swiper-button-next" onClick={handleNextSlide}></div>
        <div className="swiper-button-prev" onClick={handlePrevSlide}></div>
      </div>
    </>
  );
}
