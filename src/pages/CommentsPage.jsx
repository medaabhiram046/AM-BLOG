import { useEffect, useMemo, useState } from 'react';
import Loader from '../components/Loader';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=40');
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error('Failed to fetch comments', error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);

  const filteredComments = useMemo(() => {
    return comments.filter(
      (comment) =>
        comment.name.toLowerCase().includes(search.toLowerCase()) ||
        comment.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [comments, search]);

  if (loading) return <Loader text="Loading comments..." />;

  return (
    <section>
      <div className="section-title-row">
        <div>
          <p className="section-tag">Community</p>
          <h2>Comments Showcase</h2>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search comments by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        {filteredComments.map((comment) => (
          <article key={comment.id} className="card comment-card">
            <h3>{comment.name}</h3>
            <p className="email">{comment.email}</p>
            <p>{comment.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
