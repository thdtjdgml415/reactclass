import React from "react";

const textInfo = [
  {
    className: "t1",
    title: "space",
    desc: "작년에 다양한 컨텐츠를 만들었던 Space 기업입니다.",
    btn: "더보기",
  },
  {
    className: "t2",
    title: "Tesla",
    desc: "  전기차로 세계에서 손꼽히는 기업으로 거대규모의 기업입니다.",
    btn: "더보기",
  },
  {
    className: "t3",
    title: "MS",
    desc: " 마이크로소프트는 소프트웨어에서 독보적인 기업입니다.",
    btn: "더보기",
  },
  {
    className: "t4",
    title: "Samsung",
    desc: "대한민국의 최대 기업인 삼성에서도 저희에게 투자를 해주고 있습니다.",
    btn: "더보기",
  },
  {
    className: "t5",
    title: "Meta",
    desc: " 얼마전에 이름을 facebook에서 바꾼 메타입니다.",
    btn: "더보기",
  },
  {
    className: "t6",
    title: "apple",
    desc: "애플에서도 저희에게 투자하고 있습니다.",
    btn: "더보기",
  },
];

const Textdesc = ({ className, title, desc, btn }) => {
  return (
    <div className={`text ${className}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text_btn" href="/">
        {btn}
      </a>
    </div>
  );
};

function Text({ attr }) {
  return (
    <section id="textType" className="text__wrap">
      <h2 className="blind">텍스트 영역</h2>
      <section
        id="textType"
        className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
      >
        <span className="blind">텍스트 유형01</span>
        <h2>도움을 주신 모든 분들</h2>
        <div className="text__inner container">
          {textInfo.map((info, index) => (
            <Textdesc
              key={index}
              className={info.className}
              title={info.title}
              desc={info.desc}
              btn={info.btn}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Text;
