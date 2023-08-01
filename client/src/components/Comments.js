import { useState, useEffect } from 'react'
import AddComment from './AddComment';
import closeButton from '../assets/closeButton.png'


const Comments = ({authSession, username, language}) => {

    const [comments, setComments] = useState([]);

    const [showAddComment, setShowAddComment] = useState(false);

    useEffect(() => 
    {
      fetch('/api/comments')
        .then((res) => res.json())
        .then((res) => 
        {
          setComments(res);
        })
        .catch((err) => console.log("ERROR: " + err));
    }, []);

    useEffect(() => {
        comments.map((comment) => 
        {
            console.log("Fetched comment: " + comment.text);
            return null;
        })
      }, [comments]);

    const deleteComment = ((id) => 
    {
      console.log(`/api/comment/${id}`);
      fetch(`/api/comment/${id}`, {method: 'DELETE'})
        .then((res) => res.json())
        .then((res) => 
        {
          console.log(res);
          setComments(res);
          return;
        })
        .catch((err) => console.log("ERROR: " + err));
    })

    const addComment = ((author, text) => 
    {
      console.log("TRYING TO ADD THE COMMENT: " + JSON.stringify({author: author, text: text}));
      fetch("/api/comment", 
      {
        method: 'POST',
        body: JSON.stringify({author: author, text: text}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }})
        .then((res) => res.json())
        .then((res) => 
        {
          console.log(res);
          setComments(res);
          setShowAddComment(false);
          return;
        })
        .catch((err) => console.log("ERROR: " + err));
    })

  return (
    <div className="comments-container">
      <h2>{language ? "Comment anything you want and it will be displayed in this page" 
                    : "Escreve o que quiseres e será exibido nesta página"}</h2>
      {authSession ? <button onClick={() => setShowAddComment(!showAddComment)}>{language ? "Add comment" : "Adiciona um comentário"}</button> 
                   : <h2>{language ? "Log in to add a comment!" : "Inicia sessão para adicionares um comentário!"}</h2>}
      {showAddComment && <AddComment onSubmit= {(text) => addComment(username, text)}/>}
      {comments.map((comment) =>
      {
          return (
              <div key={comment.id} className='comment'>
                  <p className='comment-text'>{comment.text}</p>
                  <p className='comment-date'>{comment.author_name} {comment.date.substring(0,10)}</p>
                  {(comment.author_name === username || username === "understable") && 
                  <button className='delete-comment' onClick={() => deleteComment(comment.id)}><img src={closeButton}></img></button>}
              </div>)
      })}
    </div>
  )
}

export default Comments
