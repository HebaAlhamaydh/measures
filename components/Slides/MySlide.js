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
import { useRouter } from "next/router";

export default function MySlide(props) {
  /////////change language///////////
  const { locale, asPath, push } = useRouter();
  const changeLanguage = (e) => {
    const newLocale = locale === "en" ? "ar" : "en";
    push(asPath, asPath, { locale: newLocale });
  };
  //////////////////////
  const languages = locale === "en" ? `لغة عربية` : ` English `;
  const textOne =
    locale === "en"
      ? `Because your mental health is important to know its level using the Labayh measures `
      : `لأن صحتك النفسية مهمة تعرف على مستواها باستخدام المقاييس من كيورا`;
  const textTwo =
    locale === "en"
      ? `Disclaimer:These tests arent a diagnostic tool or a therapeutic tool and dont dispense with consulting a doctor or psychotherapist `
      : `تنويه هذه الاختبارات ليست أداة تشخيص أو أداة علاجية و لا تغني عن جلسة الطبيب أو المعالج النفسي`;
  // console.log(data[locale].data);

  ////////////pagination of slider////////////
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
    <div className={styles.container}>
      <button className={styles.languageBtn} onClick={changeLanguage}>
        {languages}
      </button>
      <h2 className={styles.title}>
        {textOne}

        <p className={styles.note}>{textTwo}</p>
      </h2>
      <Swiper
        spaceBetween={5}
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
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {data[locale].data.map((card, index) => (
          <SwiperSlide key={index}>
            <CardSlide
              key={index}
              id={index}
              data={props.data}
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
    </div>
  );
}
