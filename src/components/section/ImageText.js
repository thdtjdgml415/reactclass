import React from "react";

const imgTextTitle = {
  blind: "유용한 사이트 살펴보기",
  link: "우주에 관한 사이트",
  title: "Space reference",
  desc: "우주산업에 투자해보세요!",
};

const imgTextdesc = [
  {
    desc: "튜토리얼 사이트",
  },
  {
    desc: "레퍼런스 사이트",
  },
  {
    desc: "space 사이트",
  },
  {
    desc: "twitter 사이트",
  },
  {
    desc: "spaceX 사이트",
  },
  {
    desc: "Youtube사이트",
  },
];

const imgTextimg = [
  {
    className: "img1",
    imgdesc: "레퍼런스 사이트",
    color: "red",
    link: "/",
  },
  {
    className: "img2",
    imgdesc: "튜토리얼 사이트",
    color: "blue",
    link: "/",
  },
];

function ImgText({ desc }) {
  return (
    <li>
      <a href="/">{desc}</a>
    </li>
  );
}

function ImgTextimg({ className, imgdesc, link, color }) {
  return (
    <div className={`imgText__img ${className}`}>
      <a href={link} className={`${color}`}>
        {imgdesc}
      </a>
    </div>
  );
}

function ImageText({ attr }) {
  return (
    <section
      id="imgtextType"
      className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
    >
      <h2 className="blind">{imgTextTitle.blind}</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imgTextTitle.link}</span>
          <h3>{imgTextTitle.title}</h3>
          <p>{imgTextTitle.desc}</p>
          <ul>
            {imgTextdesc.map((info, index) => (
              <ImgText key={index} desc={info.desc} />
            ))}
          </ul>
        </div>

        {
          imgTextimg.map((info2, index) => (
            <ImgTextimg
              key={index}
              className={info2.className}
              imgdesc={info2.imgdesc}
              link={info2.link}
              color={info2.color}
            />
          ))

          /* <div className="imgText__img img2">
          <a href="/" className="blue">
            튜토리얼 사이트
          </a>
        </div> */
        }
      </div>
    </section>
  );
}

export default ImageText;
