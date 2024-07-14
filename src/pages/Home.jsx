import React from 'react';
import './Home.css';
import rorringList1 from '../assets/images/RorringList_1.svg';

function Home() {
  return (
    <div className="container">
      <div className="row row-content mt-60">
        <div className="col">
          <div className="row mb-16">
            <div className="col">
              <span className="content-point">Point. 01</span>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col">
              <span className="bold-text">
                누구나 손쉽게, 온라인 <br />
                롤링 페이퍼를 만들 수 있어요
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="plain-text">로그인 없이 자유롭게 만들어요.</span>
            </div>
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
