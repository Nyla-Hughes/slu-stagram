// src/components/Feed.jsx
import PostCard from "./PostCard";

export default function Feed({ posts, setPosts }) {
  return (
    <section aria-label="feed">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} setPosts={setPosts} />
      ))}
    </section>
  );
}
