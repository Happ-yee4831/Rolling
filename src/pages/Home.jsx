import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import rorringList1 from '../assets/images/RorringList_1.svg';
import rorringList2 from '../assets/images/RorringList_2.png';

function Home() {
  return (
    <div className="container">
      {/* ---------- 첫번째 content ---------- */}
      <div className="row row-content">
        {/* ---------- 첫번째 section (글) ---------- */}
        <div className="col">
          <div className="row">
            <div className="col mb-16">
              <span className="content-point">Point. 01</span>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className="bold-text">누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <span className="plain-text">로그인 없이 자유롭게 만들어요.</span>
            </div>
          </div>
        </div>

        {/* ---------- 첫번째 section (사진) ---------- */}
        <div className="col">
          <img className="Rorring1" src={rorringList1} alt="Rorring1" />
        </div>
      </div>

      {/* ---------- 두번째 content ---------- */}
      <div className="row row-content mt-30 ">
        {/* ---------- 두번째 section (사진) ---------- */}
        <div className="col-md-6 col-12 order-2 order-md-1">
          <img src={rorringList2} alt="Rorring2" />
        </div>

        {/* ---------- 두번째 section (글) ---------- */}
        <div className="col-md-6 col-12 order-1 order-md-2">
          <div className="row mb-16">
            <div className="col">
              <span className="content-point">Point. 02</span>
            </div>
          </div>

          <div className="row mb-8">
            <div className="col">
              <span className="bold-text">서로에게 이모지로 감정을 표현해보세요</span>
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <span className="plain-text">롤링 페이퍼에 이모지를 추가할 수 있어요.</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- 세번째 content ---------- */}
      <div className="row">
        <div className="col col-content3">
          <Link to="/List">
            <button className="button" type="button">
              구경해보기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
