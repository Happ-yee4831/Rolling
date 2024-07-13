import React from 'react';
import './Home.css';
import profilePicture from '../../assets/images/profile-Picture.svg';

// TODO: component 구현은 추후 진행예정
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
        <div className="MainPage-CardList">
          <div className="MainPage-Card">
            <div className="profileForm">
              <img className="img-Profile" src={profilePicture} alt="profile" />
              <div className="textForm">
                <span className="From-text">From.</span>
                <span className="Name-text"> 강미나</span>
                <span className="Freind-text">친구</span>
              </div>
            </div>

            <div className="Line-MainPage-Card" />
            <div className="TextBox-MainPage-Card">
              코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!
            </div>
            <span className="Date-MainPage-Card">2023.07.08</span>
          </div>
          <div className="MainPage-PlusCard">
            <div className="plusForm" />
          </div>
        </div>
      </div>

      <div className="MainSecondContainer">
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
