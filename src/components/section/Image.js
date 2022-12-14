import React from "react";

const imageTitle = {
  title: "μ°μ£Όπ",
  desc: "μ°μ£Όλ λμ΄μ κ° μ μλ μμ­μ΄ μλλλ€. μ ν¬κ° λμλλ¦¬κ² μ΅λλ€.",
};

const imagedesc = [
  {
    title: "λ¬ νλ‘μ νΈ",
    desc: "λ¬μμ μ§ννλ μ¬μμ λν μ΄μΌκΈ°λ₯Ό λλ λ³΄λλ‘ νκ² μ΅λλ€. λ¬μ μ§κΈλ κ°λ°νκ³  μμ΅λλ€ μ ν¬λ μλλ³΄λ€ μμ κ°κΈ°μν΄μ...",
    className: "img1",
  },
  {
    title: "μν νλ‘μ νΈ",
    desc: "  μ°λ¦¬ μνκ³κ° μΌλ§λ λ§μ μμμ κ°μ§κ³  μλμ§ μκ³  μμΌμ­λκΉ? μνκ³λ μμ²­λ κ°μΉλ₯Ό μ§λκ³  μκ³  νμ¬λ₯Ό μν΄ μ¬λ¬λΆμ λμμ΄ νμν©λλ€.",
    className: "img2",
  },
];

function ImageText({ title, desc, className }) {
  return (
    <article className={`image ${className}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a href="/">μμΈνλ³΄κΈ°</a>
    </article>
  );
}

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
