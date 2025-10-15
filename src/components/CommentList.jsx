// src/components/CommentList.jsx
export default function CommentList({ comments }) {
  if (!comments.length) {
    return <p style={{ opacity: 0.7 }}>Be the first to comment.</p>;
  }
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {comments.map((c) => (
        <li key={c.id}>
          <strong>@{c.author}</strong> {c.text}
        </li>
      ))}
    </ul>
  );
}
