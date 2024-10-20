import React, { useRef, useState } from 'react';

export default function CommentForm() {
  const commentRef = useRef();
  const reviewRef = useRef();
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      comment: commentRef.current.value,
      review: reviewRef.current.value,
    };

    setComments([...comments, newComment]);

    commentRef.current.value = '';
    reviewRef.current.value = '';
  };

  return (
    <div>
      <h3>Submit your Comment and Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter comment" ref={commentRef} />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Enter review" ref={reviewRef} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h4>Submitted Comments and Reviews</h4>
        {comments.length > 0 ? (
          comments.map((item, index) => (
            <div key={index}>
              <p><strong>Comment:</strong> {item.comment}</p>
              <p><strong>Review:</strong> {item.review}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No comments or reviews submitted yet.</p>
        )}
      </div>
    </div>
  );
}
