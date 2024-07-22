import { Outlet } from 'react-router-dom';
import style from 'styles/Layout.module.css';

function Layout() {
  return (
    <>
      <header className={style.Temporary} />

      <Outlet />
    </>
  );
}

export default Layout;
