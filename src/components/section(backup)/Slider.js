import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="desc">
            <span>DEVELOPER</span>
            <h3>space</h3>
            <p>
              먼 곳에서 보지말고 직접가서 보자 <br />
              꿈꾸기만 하면 아무것도 이루어지지 않는다!
            </p>
            <div class="btn">
              <a href="/">자세히 보기</a>
              <a href="/" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>DEVELOPER</span>
            <h3>space</h3>
            <p>
              먼 곳에서 보지말고 직접가서 보자 <br />
              꿈꾸기만 하면 아무것도 이루어지지 않는다!
            </p>
            <div class="btn">
              <a href="/">자세히 보기</a>
              <a href="/" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="desc">
            <span>DEVELOPER</span>
            <h3>space</h3>
            <p>
              먼 곳에서 보지말고 직접가서 보자 <br />
              꿈꾸기만 하면 아무것도 이루어지지 않는다!
            </p>
            <div class="btn">
              <a href="/">자세히 보기</a>
              <a href="/" class="black">
                사이트 보기
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
