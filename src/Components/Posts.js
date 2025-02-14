import React from "react";
import Post from "./Post";
import posts from "../DummyData/PostDummy";

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post._id}
          username={post.username}
          handle={`@${post.username}`}
          timestamp={post.createdAt}
          caption={post.text}
          mediaUrl={post.mediaUrl}
          mediaType={post.mediaType}
          likes={post.likes.length} // Pass the number of likes
          comments={post.comments} // Pass the comments array directly
          shares={post.shares || 0} // Add shares if needed
          avatar={post.avatar}
        />
      ))}
    </div>
  );
};

export default Posts;