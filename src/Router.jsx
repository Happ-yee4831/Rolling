import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'layouts/Layout';

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
              <Rouet path="message" element={<PostIdMessage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
