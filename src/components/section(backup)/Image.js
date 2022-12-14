import React from "react";

function Image({ attr }) {
  return (
    <section id="imageType" className={`image__wrap ${attr[0]} ${attr[1]}`}>
      <h2>μ°μ£Όπ</h2>
      <p>μ°μ£Όλ λμ΄μ κ° μ μλ μμ­μ΄ μλλλ€. μ ν¬κ° λμλλ¦¬κ² μ΅λλ€.</p>
      <div className={`image__inner ${attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">λ¬ νλ‘μ νΈ</h3>
          <p className="image__desc">
            λ¬μμ μ§ννλ μ¬μμ λν μ΄μΌκΈ°λ₯Ό λλ λ³΄λλ‘ νκ² μ΅λλ€. λ¬μ
            μ§κΈλ κ°λ°νκ³  μμ΅λλ€ μ ν¬λ μλλ³΄λ€ μμ κ°κΈ°μν΄μ...
          </p>
          <a href="#">μμΈνλ³΄κΈ°</a>
        </article>
        <article className="image img2">
          <h3 className="image__title">μν νλ‘μ νΈ</h3>
          <p className="image__desc">
            μ°λ¦¬ μνκ³κ° μΌλ§λ λ§μ μμμ κ°μ§κ³  μλμ§ μκ³  μμΌμ­λκΉ?
            μνκ³λ μμ²­λ κ°μΉλ₯Ό μ§λκ³  μκ³  νμ¬λ₯Ό μν΄ μ¬λ¬λΆμ λμμ΄
            νμν©λλ€.
          </p>
          <a href="#">μμΈνλ³΄κΈ°</a>
        </article>
      </div>
    </section>
  );
}

export default Image;
