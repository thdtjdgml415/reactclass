import React from "react";

const BannerInfo = {
  title: "우주",
  desc: "  미지의 탐사를 원하시는 분은 <a href='/' title='페이지 이동'>많은 질문 부탁드리고 이곳을 클릭해주세요.</a>",
};

function Banner(attr) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">우주</h3>
        <p className="desc">
          미지의 탐사를 원하시는 분은
          <a href="/" title="페이지 이동">
            많은 질문 부탁드리고 이곳을 클릭해주세요.
          </a>
        </p>
        <span className="small blind">배너유형01</span>
      </div>
    </section>
  );
}

export default Banner;
