import BackgroundImg from "./BackgroundImg";

const Youniverse = ({language}) => {
  return (
    <div className="body-container">
      <BackgroundImg content="youniverse" img=""/>
      <div className="youniverse-content">
          <h1>Youniverse</h1>
          <p>{language ?'A project that involves some sort of user built start system with custom planets and stars which i might do at some point'
          : "Um projeto que involve um conceito de um sistema estelar com planetas e estrelas customizáveis pelos usuários que talvez farei eventualmente"}</p>
      </div>
    </div>
  )
}

export default Youniverse
