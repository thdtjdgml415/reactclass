import React from "react";

function Image({ attr }) {
  return (
    <section id="imageType" className={`image__wrap ${attr[0]} ${attr[1]}`}>
      <h2>우주🚀</h2>
      <p>우주는 더이상 갈 수 없는 영역이 아닙니다. 저희가 도와드리겠습니다.</p>
      <div className={`image__inner ${attr[2]}`}>
        <article className="image img1">
          <h3 className="image__title">달 프로젝트</h3>
          <p className="image__desc">
            달에서 진행하는 사업에 대한 이야기를 나눠보도록 하겠습니다. 달은
            지금도 개발하고 있습니다 저희도 시대보다 앞서 가기위해서...
          </p>
          <a href="#">자세히보기</a>
        </article>
        <article className="image img2">
          <h3 className="image__title">은하 프로젝트</h3>
          <p className="image__desc">
            우리 은하계가 얼마나 많은 자원을 가지고 있는지 알고 있으십니까?
            은하계는 엄청난 가치를 지니고 있고 탐사를 위해 여러분에 도움이
            필요합니다.
          </p>
          <a href="#">자세히보기</a>
        </article>
      </div>
    </section>
  );
}

export default Image;
