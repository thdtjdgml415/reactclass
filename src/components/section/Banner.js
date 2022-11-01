import React from "react";

const BannerInfo = [
  {
    title: "우주",
    desc: "미지의 탐사를 원하시는 분은",
    small: "배너유형01",
    link: " 많은 질문 부탁드리고 이곳을 클릭해주세요.",
  },
];

const Bannerdesc = ({ title, desc, small, link }) => {
  return (
    <div className="banner__inner">
      <h3 className="title">{title}</h3>
      <p className="desc">
        {desc}
        <a href="/" title="페이지 이동">
          {link}
        </a>
        <span className="small blind">{small}</span>
      </p>
    </div>
  );
};

function Banner(attr) {
  return (
    <section
      id="bannerType"
      className={`banner__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">배너 영역</h2>
      {
        BannerInfo.map((info, index) => (
          <Bannerdesc
            key={index}
            title={info.title}
            desc={info.desc}
            small={info.small}
            link={info.link}
          />
        ))

        /* <div className="banner__inner">
        <h3 className="title">우주</h3>
        <p className="desc">
          미지의 탐사를 원하시는 분은
          <a href="/" title="페이지 이동">
            많은 질문 부탁드리고 이곳을 클릭해주세요.
          </a>
        </p>
        <span className="small blind">배너유형01</span>
      </div> */
      }
    </section>
  );
}

export default Banner;
