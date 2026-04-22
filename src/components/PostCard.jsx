import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="card post-card">
      <div className="card-top">
        <span className="mini-badge">Post #{post.id}</span>
        <span className="author">User {post.userId}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="read-more">Read Full Post →</Link>
    </article>
  );
}
