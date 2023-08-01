import React, { useState } from 'react';

const AddComment = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <div className="addComment-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Comment:</label><br></br>
        <input type="text" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} /><br></br>
        <input type="submit" value="Comment" />
      </form>
    </div>
  );
};

export default AddComment;