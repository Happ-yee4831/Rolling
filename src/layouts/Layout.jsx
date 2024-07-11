import Footer from 'components/Footer';
// import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import style from 'styles/Layout.module.css';

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <header className={style.Temporary} />
      {/* 임시 헤더 */}

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
