/* eslint-disable */
import React from 'react';
import Logo from 'assets/images/logo@3x.png';
import styles from 'styles/Header.module.scss';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const hiddenPaths = ['/post', '/post/message'];

  if (location.pathname.startsWith('/post/') && location.pathname.endsWith('/message')) {
    hiddenPaths.push(location.pathname);
  }
  const hideLink = hiddenPaths.includes(location.pathname);
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        {!hideLink && (
          <Link to="post" path="">
            롤링 페이퍼 만들기
          </Link>
        )}
      </header>
      <div className={styles.border} />
    </>
  );
}

export default Header;
