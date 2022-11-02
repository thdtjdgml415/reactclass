import React from "react";

function ImageText() {
  return (
    <section id="imgtextType" class="imgText__wrap nexon section position">
      <h2 class="blind">유용한 사이트 살펴보기</h2>
      <div class="imgText__inner container">
        <div class="imgText__txt">
          <span>우주에 관한 사이트</span>
          <h3>Space reference</h3>
          <p>우주산업에 투자해보세요!</p>
          <ul>
            <li>
              <a href="/">튜토리얼 사이트</a>
            </li>
            <li>
              <a href="/">레퍼런스 사이트</a>
            </li>
            <li>
              <a href="/">space 사이트</a>
            </li>
            <li>
              <a href="/">twitter 사이트</a>
            </li>
            <li>
              <a href="/">spaceX 사이트</a>
            </li>
            <li>
              <a href="/">Youtube사이트</a>
            </li>
          </ul>
        </div>
        <div class="imgText__img img1">
          <a href="/">레퍼런스 사이트</a>
        </div>
        <div class="imgText__img img2">
          <a href="/" class="blue">
            튜토리얼 사이트
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
