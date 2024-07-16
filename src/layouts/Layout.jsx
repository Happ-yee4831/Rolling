// import Footer from 'components/Footer';
// import Header from 'components/Header';
import { Link, Outlet } from 'react-router-dom';
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

      {/* <Footer /> */}
      <footer>
        <Link to="/post" className={style.postLink}>
          나도 만들어보기
        </Link>
      </footer>
    </>
  );
}

export default Layout;
