import React from 'react';
import './Home.css';
import rorringList1 from '../assets/images/RorringList_1.png';
import rorringList2 from '../assets/images/RorringList_2.png';

function Home() {
  return (
    <div className="MainContainer">
      <div className="MainFirstContainer">
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
        <img src={rorringList1} alt="Rorring1" />
      </div>

      <div className="MainSecondContainer">
        <img src={rorringList2} alt="Rorring2" />
        <div className="section2">
          <span className="Point">
            Point. 02 <br />
          </span>
          <span className="Bold-text">
            서로에게 이모지로 감정을 <br />
            표현해보세요
            <br />
          </span>
          <span className="Plain-text">롤링 페이퍼에 이모지를 추가할 수 있어요.</span>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="button" type="button" aria-label="구경해보기">
          구경해보기
        </button>
      </div>
    </div>
  );
}

export default Home;
