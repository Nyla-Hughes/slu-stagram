// src/components/Composer.jsx
import { useState } from "react";

export default function Composer({ setPosts, me = "you" }) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const urlTrimmed = imageUrl.trim();
  const canShare = urlTrimmed.length > 0;

  function submit(e) {
    e.preventDefault();
    if (!canShare) return;
    const post = {
      id: crypto.randomUUID(),
      author: me,
      avatar: "https://i.pravatar.cc/100?u=" + me,
      imageUrl: urlTrimmed,
      caption: caption.trim(),
      likedByMe: false,
      likeCount: 0,
      comments: [],
    };
    setPosts((prev) => [post, ...prev]);
    setImageUrl("");
    setCaption("");
  }

  return (
    <form
      onSubmit={submit}
      style={{ border: "1px solid #d191cfff", borderRadius: 8, padding: 8, margin: "12px 0" }}
    >
      <h3>Create Post</h3>
      <input
        aria-label="Image URL"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 6 }}
      />
      <input
        aria-label="Caption"
        placeholder="Caption (optional)"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        style={{ width: "100%" }}
      />
      <div style={{ marginTop: 8 }}>
        <button type="submit" disabled={!canShare}>Share</button>
      </div>
    </form>
  );
}
