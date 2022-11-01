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
          <div className="text t1">
            <h3 className="text__title">space</h3>
            <p className="text__desc">
              작년에 다양한 컨텐츠를 만들었던 Space 기업입니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t2">
            <h3 className="text__title">Tesla</h3>
            <p className="text__desc">
              전기차로 세계에서 손꼽히는 기업으로 거대규모의 기업입니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t3">
            <h3 className="text__title">MS</h3>
            <p className="text__desc">
              마이크로소프트는 소프트웨어에서 독보적인 기업입니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t4">
            <h3 className="text__title">Samsung</h3>
            <p className="text__desc">
              대한민국의 최대 기업인 삼성에서도 저희에게 투자를 해주고 있습니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t5">
            <h3 className="text__title">Meta</h3>
            <p className="text__desc">
              얼마전에 이름을 facebook에서 바꾼 메타입니다.
            </p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
          <div className="text t6">
            <h3 className="text__title">apple</h3>
            <p className="text__desc">애플에서도 저희에게 투자하고 있습니다.</p>
            <a className="text_btn" href="/">
              더보기
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Text;
