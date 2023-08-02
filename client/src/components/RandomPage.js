import Comments from "./Comments"

const RandomPage = ({authSession, username, language, host}) => {
  return (
    <div className="body-container">
      <h1>{language ? "Comments" : "Comentários"}</h1>
      <Comments authSession={authSession} username={username} language={language} host={host}/>
      <h1>{language ? "THE BUTTON" : "O BOTÃO"}</h1>
      <h2>{language ? "Soon..." : "Em breve..."}</h2>
    </div>
  )
}

export default RandomPage
