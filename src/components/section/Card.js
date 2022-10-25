import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className="card__wrap">
      <h2 className="blind">카드 영역</h2>
      <section
        id="cardType"
        className={`card__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]}`}
      >
        <h2>SPACE PLANETS🐷</h2>
        <p>행성에 대해 자세히 배워가시면 더욱 도움이 될 것 입니다.</p>
        <div className="card__inner">
          <article className="card">
            <figure className="card__header">
              <img src="../assets/img/card_bg01.jpg" alt="행성" />
            </figure>
            <div className="card__body">
              <h3 className="tit">토성</h3>
              <p className="desc">
                토성 고리에는 엄청나게 많은 위성들이 있습니다, 그중에도
                타이탄이라는 위성에는 많은 석유를 매장하고 있다는 보고가
                있습니다. 이자원들을 활용...
              </p>
              <a className="btn" href="/">
                더 자세히 보기
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
              <img src="../assets/img/card_bg02.jpg" alt="행성" />
            </figure>
            <div className="card__body">
              <h3 className="tit">해왕성</h3>
              <p className="desc">
                해왕성에는 수자원이 풍부해서 여러분들에게 충분한 물을 제공해 줄
                수 있습니다. 행성을 개발 할 수 있다면 지구에 물 부족은 존재하지
                않을 것입니다.
              </p>
              <a className="btn" href="/">
                더 자세히 보기
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
              <img src="../assets/img/card_bg03.jpg" alt="행성" />
            </figure>
            <div className="card__body">
              <h3 className="tit">달</h3>
              <p className="desc">
                달에는 현재 심심치 않게 갈 수 있습니다. 여러분들은 달에 얼마나
                많은 양의 자원이 있는지 알고 있으십니다. 어떤 가치가 있는지
                이야기를 나눠보겠습니다.
              </p>
              <a className="btn" href="/">
                더 자세히 보기
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
