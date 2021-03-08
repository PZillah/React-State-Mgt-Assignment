import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const saveNewPostToPostArray = (postReadyForDisplay) => {
  const newPosts = [...posts, postReadyForDisplay]
    setPosts(newPosts);
    console.log(newPosts);
  };
  const handleDelete = (postIndex) => {
    setPosts((post) => posts.filter((post, index) => index !== postIndex));
  };
  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} handleAdd={saveNewPostToPostArray} />
      <PostList posts={posts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
