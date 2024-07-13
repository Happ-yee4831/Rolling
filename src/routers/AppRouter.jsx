import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'layouts/Layout';
import Home from 'pages/Home/Home';
import List from 'pages/List';
import Post from 'pages/Post';
import PostId from 'pages/PostId';
import PostIdEdit from 'pages/PostIdEdit';
import PostIdMessage from 'pages/PostIdMessage';
import 'styles/reset.css';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="post">
            <Route index element={<Post />} />
            <Route path=":id">
              <Route index element={<PostId />} />
              <Route path="edit" element={<PostIdEdit />} />
              <Route path="message" element={<PostIdMessage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
