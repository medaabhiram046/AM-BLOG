import { useEffect, useMemo, useState } from 'react';
import Loader from '../components/Loader';
import PostCard from '../components/PostCard';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  if (loading) return <Loader text="Fetching blog posts..." />;

  return (
    <section>
      <div className="section-title-row">
        <div>
          <p className="section-tag">Posts Page</p>
          <h2>All Blog Posts</h2>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="stats-bar glass">
        <div><strong>{posts.length}</strong><span>Total Posts</span></div>
        <div><strong>{filteredPosts.length}</strong><span>Filtered Results</span></div>
      </div>

      <div className="grid post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
