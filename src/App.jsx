import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import CommentsPage from './pages/CommentsPage';
import Login from './pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="comments" element={<CommentsPage />} />
      </Route>
    </Routes>
  );
}
