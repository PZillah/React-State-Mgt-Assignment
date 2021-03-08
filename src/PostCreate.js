import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
// to create a post we need to know the state of type and content
function PostCreate({ posts, setPosts, handleAdd}) {
  const [type, setType] = useState("Text"); //dropdown select element
  const handleTypeChange = (event) => {
    const newType = event.target.value; //value of the option they clicked on
    setType(newType);
  };

  const [content, setContent] = useState("");
  const handleContentChange = (event) => {
    const newContent = event.target.value;
    console.log(newContent);
    setContent(newContent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const stuffInsidePost = {
      type: type,
      content: content,
    };
    handleAdd(stuffInsidePost);
    setType("Text");
    setContent("");
  };

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            value={type}
            required={true}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              value={content}
              required={true}
              rows={3}
              onChange={handleContentChange}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              value={content}
              required={true}
              onChange={handleContentChange}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
