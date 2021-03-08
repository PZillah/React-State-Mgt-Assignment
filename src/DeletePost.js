import React from "react";

function DeletePost({ posts, handleDelete, id }) {
 return <button key={id} name="delete" onClick={handleDelete(id)}>Delete</button>
};

export default DeletePost;

