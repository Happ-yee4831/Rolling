// import Footer from 'components/Footer';
// import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import style from 'styles/Layout.module.css';

function Layout() {
  return (
    <>
      {/* <Header /> */}
      <header className={style.Temporary} />
      {/* 임시 헤더 */}

      <Outlet />

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
