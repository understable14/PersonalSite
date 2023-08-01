import BackgroundImg from "./BackgroundImg";
import Music from "./Songs";

const MusicPage = ({language}) => {
  
  return (
    <div className="body-container">
        <h1>{language ? "My music" : "A minha musica"}</h1>
        <BackgroundImg content="music" img="https://i.pinimg.com/originals/3f/1b/97/3f1b9787c5dfbda638d6433e8068e5d4.jpg"/>
        <h1>{language ? "Released tracks" : "Musicas lançadas"}</h1>
        <Music/>
    </div>
  )
}

export default MusicPage
