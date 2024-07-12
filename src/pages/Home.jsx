import React from 'react';
import './Home.css';
import rorringList1 from '../assets/images/RorringList_1.png';

function Home() {
  return (
    <div className="MainContainer">
      <div className="MainFirstContainer">
        <div className="section1">
          <span className="PointOne">
            Point. 01 <br />
          </span>
          <span className="Bold-text">
            누구나 손쉽게, 온라인 <br />
            롤링 페이퍼를 만들 수 있어요
            <br />
          </span>
          <span className="Plain-text">로그인 없이 자유롭게 만들어요.</span>
        </div>
        <img className="RorringList-1" src={rorringList1} alt="Rorring" />
      </div>
    </div>
  );
}

export default Home;
