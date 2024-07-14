import React from 'react';
import './Home.css';
import rorringList1 from '../assets/images/RorringList_1.svg';

function Home() {
  return (
    <div className="container">
      <div className="row row-content mt-60">
        <div className="col">
          <div className="section1">
            <span className="Point">
              Point. 01 <br />
            </span>
            <span className="Bold-text">
              누구나 손쉽게, 온라인 <br />
              롤링 페이퍼를 만들 수 있어요
              <br />
            </span>
            <span className="Plain-text">로그인 없이 자유롭게 만들어요.</span>
          </div>
        </div>
        <div className="col">
          <img src={rorringList1} alt="Rorring1" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">row2</div>
      </div>
      <div className="row">
        <div className="col-12">row2</div>
      </div>
    </div>
  );
}

export default Home;
