import React from 'react';
import Logo from 'assets/images/logo.png';
import styles from 'styles/Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <button className={styles['made-button']} type="button">
        롤링 페이퍼 만들기
      </button>
    </header>
  );
}

export default Header;
