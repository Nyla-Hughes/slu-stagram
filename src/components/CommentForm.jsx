// src/components/CommentForm.jsx
import { useState } from "react";

export default function CommentForm({ postId, setPosts, me = "you" }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        return {
          ...p,
          comments: [...(p.comments ?? []), { id: crypto.randomUUID(), author: me, text: t }],
        };
      })
    );
    setText("");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 6, marginTop: 8 }}>
      <input
        aria-label="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
        style={{ flex: 1 }}
      />
      <button type="submit">Post</button>
    </form>
  );
}
