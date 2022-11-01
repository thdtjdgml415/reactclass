import React from "react";

const imageTitle = {
  title: "우주🚀",
  desc: "우주는 더이상 갈 수 없는 영역이 아닙니다. 저희가 도와드리겠습니다.",
};

const imagedesc = [
  {
    title: "달 프로젝트",
    desc: "달에서 진행하는 사업에 대한 이야기를 나눠보도록 하겠습니다. 달은 지금도 개발하고 있습니다 저희도 시대보다 앞서 가기위해서...",
    className: "img1",
  },
  {
    title: "은하 프로젝트",
    desc: "  우리 은하계가 얼마나 많은 자원을 가지고 있는지 알고 있으십니까? 은하계는 엄청난 가치를 지니고 있고 탐사를 위해 여러분에 도움이 필요합니다.",
    className: "img2",
  },
];

const ImageText = ({ title, desc, className }) => {
  return (
    <article className={`image ${className}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a href="/">자세히보기</a>
    </article>
  );
};

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[3]}`}>
        {imagedesc.map((info, index) => (
          <ImageText
            key={index}
            title={info.title}
            desc={info.desc}
            className={info.className}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
