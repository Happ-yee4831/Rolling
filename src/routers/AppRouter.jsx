import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import List from 'pages/List';
import Post from 'pages/Post';
import PostId from 'pages/PostId';
import PostIdEdit from 'pages/PostIdEdit';
import PostIdMessage from 'pages/PostIdMessage';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/styled/theme';
import Layout from 'layouts/Layout';
import PostLayout from 'layouts/PostLayout';

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="list" element={<List />} />
            <Route path="post">
              <Route index element={<Post />} />
              <Route path=":id">
                <Route path="message" element={<PostIdMessage />} />
              </Route>
            </Route>
          </Route>
          <Route path="/post" element={<PostLayout />}>
            <Route path=":id">
              <Route index element={<PostId />} />
              <Route path="edit" element={<PostIdEdit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;
