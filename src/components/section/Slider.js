import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider(attr) {
  return (
    <section id="sliderType" className={`slider__wrap ${attr[0]} ${attr[1]}`}>
      <div className="sliderinner">
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
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>space</h3>
              <p>
                먼 곳에서 보지말고 직접가서 보자 <br />
                꿈꾸기만 하면 아무것도 이루어지지 않는다!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>space</h3>
              <p>
                먼 곳에서 보지말고 직접가서 보자 <br />
                꿈꾸기만 하면 아무것도 이루어지지 않는다!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="desc">
              <span>DEVELOPER</span>
              <h3>space</h3>
              <p>
                먼 곳에서 보지말고 직접가서 보자 <br />
                꿈꾸기만 하면 아무것도 이루어지지 않는다!
              </p>
              <div className="btn">
                <a href="/">자세히 보기</a>
                <a href="/" className="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default Slider;
