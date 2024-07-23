import PostHeader from 'components/PostHeader';
import useResponsive from 'hooks/useResponsive';
import React from 'react';
import { Outlet } from 'react-router-dom';

function PostLayout() {
  const device = useResponsive();

  return (
    <>
      {device !== 'mobile' && <PostHeader />}
      <Outlet />
    </>
  );
}

export default PostLayout;
