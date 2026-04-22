import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPostAndComments() {
      try {
        const [postRes, commentsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
        ]);

        const postData = await postRes.json();
        const commentsData = await commentsRes.json();

        setPost(postData);
        setComments(commentsData);
      } catch (error) {
        console.error('Failed to fetch post details', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostAndComments();
  }, [id]);

  if (loading) return <Loader text="Loading post details..." />;
  if (!post) return <p>Post not found.</p>;

  return (
    <section>
      <div className="detail-card glass">
        <span className="mini-badge">Detailed View</span>
        <h2>{post.title}</h2>
        <p className="detail-body">{post.body}</p>
        <div className="detail-meta">
          <span>Post ID: {post.id}</span>
          <span>User ID: {post.userId}</span>
        </div>
        <Link to="/posts" className="btn secondary">← Back to Posts</Link>
      </div>

      <div className="comments-section">
        <div className="section-title-row">
          <div>
            <p className="section-tag">Comments</p>
            <h3>Related Comments</h3>
          </div>
        </div>

        <div className="grid">
          {comments.map((comment) => (
            <article key={comment.id} className="card comment-card">
              <h4>{comment.name}</h4>
              <p className="email">{comment.email}</p>
              <p>{comment.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
