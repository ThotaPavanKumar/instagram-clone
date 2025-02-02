import React from "react";
import { useState } from "react";
import "../styles/CommentInput.css"

function CommentInput({ func }) {
  const [comment, setComment] = useState("");

  const CommentHandler = (event) => {
    let newComment = event.target.value;
    setComment(newComment);
  };
  const CommentsListHandler = () => {
    func(comment);
    setComment("");
  };

  return (
    <>
    <div className="comment_section">
    <div className="input_comment_div">
        <input 
        onKeyPress={(e)=> e.key === "Enter"? CommentsListHandler() : null}
          value={comment}
          onChange={CommentHandler}
          className="input_comment"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <div>
        <button type="submit"
        onClick={CommentsListHandler} className="post_btn" className="post_btn">
          Post
        </button>
      </div>
      <div>
        <svg
        className="happy_imogi"
          aria-label="Emoji"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
        </svg>
      </div>
    </div>
    </>
  );
}

export default CommentInput;
