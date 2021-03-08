import React from "react";
import DeletePost from "./DeletePost";
/**
 * Diplays a list of either text or image posts.
 *
 */
// TODO: Diplay the list of posts. Render the post on the page
// TODO: Create at least one additional component that is used by this component.
// TODO: Each post must have className="post" for the tests to work.
// TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
function PostList({ posts, handleDelete }) {
  // add a post that's been created
  const postReadyForDisplay = posts.map((post, index) => {
    //render a text type post
    return (
      <li key={index} className="post" style={{ border: "1px solid black" }}>
        {type === "Text" ? (
          <p>{post.content}</p>
        ) : (
          <img key={index} src={post.content} alt="image"></img>
        )}
        <DeletePost handleDelete={handleDelete} id={index} />
      </li>
    );
  });

  return (
    <div className="post-list">
      <ul>{postReadyForDisplay}</ul>
    </div>
  );
}

export default PostList;
