import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className="card__wrap">
      <h2 className="blind">μΉ΄λ μμ­</h2>
      <section
        id="cardType"
        className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
      >
        <h2>SPACE PLANETSπ·</h2>
        <p>νμ±μ λν΄ μμΈν λ°°μκ°μλ©΄ λμ± λμμ΄ λ  κ² μλλ€.</p>
        <div className="card__inner">
          <article className="card">
            <figure className="card__header">
              <img src="../assets/img/card_bg01.jpg" alt="νμ±" />
            </figure>
            <div className="card__body">
              <h3 className="tit">ν μ±</h3>
              <p className="desc">
                ν μ± κ³ λ¦¬μλ μμ²­λκ² λ§μ μμ±λ€μ΄ μμ΅λλ€, κ·Έμ€μλ
                νμ΄νμ΄λΌλ μμ±μλ λ§μ μμ λ₯Ό λ§€μ₯νκ³  μλ€λ λ³΄κ³ κ°
                μμ΅λλ€. μ΄μμλ€μ νμ©...
              </p>
              <a className="btn" href="/">
                λ μμΈν λ³΄κΈ°
                <span aria-hidden="true">
                  <svg
                    width="58"
                    height="8"
                    viewBox="0 0 58 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.3536 4.35355C57.5488 4.15829 57.5488 3.84171 57.3536 3.64645L54.1716 0.464466C53.9763 0.269204 53.6597 0.269204 53.4645 0.464466C53.2692 0.659728 53.2692 0.976311 53.4645 1.17157L56.2929 4L53.4645 6.82843C53.2692 7.02369 53.2692 7.34027 53.4645 7.53553C53.6597 7.7308 53.9763 7.7308 54.1716 7.53553L57.3536 4.35355ZM0 4.5H57V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
          <article className="card">
            <figure className="card__header">
              <img src="../assets/img/card_bg02.jpg" alt="νμ±" />
            </figure>
            <div className="card__body">
              <h3 className="tit">ν΄μμ±</h3>
              <p className="desc">
                ν΄μμ±μλ μμμμ΄ νλΆν΄μ μ¬λ¬λΆλ€μκ² μΆ©λΆν λ¬Όμ μ κ³΅ν΄ μ€
                μ μμ΅λλ€. νμ±μ κ°λ° ν  μ μλ€λ©΄ μ§κ΅¬μ λ¬Ό λΆμ‘±μ μ‘΄μ¬νμ§
                μμ κ²μλλ€.
              </p>
              <a className="btn" href="/">
                λ μμΈν λ³΄κΈ°
                <span aria-hidden="true">
                  <svg
                    width="58"
                    height="8"
                    viewBox="0 0 58 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.3536 4.35355C57.5488 4.15829 57.5488 3.84171 57.3536 3.64645L54.1716 0.464466C53.9763 0.269204 53.6597 0.269204 53.4645 0.464466C53.2692 0.659728 53.2692 0.976311 53.4645 1.17157L56.2929 4L53.4645 6.82843C53.2692 7.02369 53.2692 7.34027 53.4645 7.53553C53.6597 7.7308 53.9763 7.7308 54.1716 7.53553L57.3536 4.35355ZM0 4.5H57V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
          <article className="card">
            <figure className="card__header">
              <img src="../assets/img/card_bg03.jpg" alt="νμ±" />
            </figure>
            <div className="card__body">
              <h3 className="tit">λ¬</h3>
              <p className="desc">
                λ¬μλ νμ¬ μ¬μ¬μΉ μκ² κ° μ μμ΅λλ€. μ¬λ¬λΆλ€μ λ¬μ μΌλ§λ
                λ§μ μμ μμμ΄ μλμ§ μκ³  μμΌμ­λλ€. μ΄λ€ κ°μΉκ° μλμ§
                μ΄μΌκΈ°λ₯Ό λλ λ³΄κ² μ΅λλ€.
              </p>
              <a className="btn" href="/">
                λ μμΈν λ³΄κΈ°
                <span aria-hidden="true">
                  <svg
                    width="58"
                    height="8"
                    viewBox="0 0 58 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M57.3536 4.35355C57.5488 4.15829 57.5488 3.84171 57.3536 3.64645L54.1716 0.464466C53.9763 0.269204 53.6597 0.269204 53.4645 0.464466C53.2692 0.659728 53.2692 0.976311 53.4645 1.17157L56.2929 4L53.4645 6.82843C53.2692 7.02369 53.2692 7.34027 53.4645 7.53553C53.6597 7.7308 53.9763 7.7308 54.1716 7.53553L57.3536 4.35355ZM0 4.5H57V3.5H0V4.5Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Card;
