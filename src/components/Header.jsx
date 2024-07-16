import React from 'react';
import Logo from 'assets/images/logo@3x.png';
import styles from 'styles/Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="post" path=" ">
          롤링 페이퍼 만들기
        </Link>
      </header>
      <div className={styles.border} />
    </>
  );
}

export default Header;
