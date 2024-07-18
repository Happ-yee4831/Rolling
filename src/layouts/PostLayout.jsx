import Header from 'components/Header';
import useResponsive from 'hooks/useResponsive';
import React from 'react';
import { Outlet } from 'react-router-dom';

function PostLayout() {
  const device = useResponsive();

  return (
    <>
      {device !== 'mobile' && <Header />}
      <Outlet />
    </>
  );
}

export default PostLayout;
