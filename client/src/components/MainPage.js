import BackgroundImg from './BackgroundImg';
import { Link } from 'react-router-dom';

const MainPage = ({language}) => {
  return (
    <div className="body-container">
      <BackgroundImg content="main" img="https://www.deccanherald.com/sites/dh/files/articleimages/2022/12/10/earthmoonnasa-1170468-1670671694.jpg"/>
      <div className='main-content'>
        <h1>{language ? "Hello i am understable" : "Olá sou o understable"}</h1>
        <div className='container-left-40'>
          <h2>Me</h2>
          <p>{language ? "Hello i am Miguel Oliveira, my pseudoname being understable. I am 20 years old and i love to learn and create new things! I made this website in order to display some of the have worked on/am working on, as well as displaying to you a bit of my personality."
          : "Olá, sou o Miguel Oliveira, também conhecido como understable. Tenho 20 anos e adoro aprender e criar coisas novas. Fiz este website para mostrar algumas das coisas que fiz/ainda estou a fazer, e também para mostrar um pouco da minha personalidade."}
          </p>
        </div>
        <div className='container-right-40'>
          <h2>{language ? "Career" : "Carreira"}</h2>
          <p>{language ? "I have recently graduated colege as a Computer Science bachelor and currently i am in the process on aquiring professional experience as a backend developer"
          : "Sou recém licenciado em Ciências de Computador e atualmente estou no processo de obter experiência profissional como um desenvolvedor de backend"}</p>
          <button style={{marginTop: 20}}><a href='https://www.linkedin.com/in/miguel-oliveira-665a311b0' target='_blank'>LinkedIn </a></button>
        </div>
        <div className='container-left-40'>
          <h2>Hobbies</h2>
          <p>{language ? "I will usually find myself using my creative energy on 3 diferent fields, Music, Programming and Astronomy"
          : "Normalmente passo a maioria da minha energia criativa em 3 áreas, Música, Programação e Astronomia"}</p>
          <p>{language ? "I find that these fields are perfect to fullfill my thirst for knowledge and the need to express my creativity"
          : "Estás áreas sao perfeitas para satisfazer a minha sede por conhecimento e a minha necessidade de exprimir a minha criatividade"}</p>
          <Link to="/music" className="header-nav"><button style={{marginTop: 20}}>{language ? "My Music" : "Minha Música"}</button></Link>
          <Link to="/youniverse" className="header-nav"><button style={{marginTop: 20, textAlign: 'left'}}>Youniverse</button></Link>
        </div>
      </div>
      <BackgroundImg content="main" img="https://www.deccanherald.com/sites/dh/files/articleimages/2022/12/10/earthmoonnasa-1170468-1670671694.jpg"/>
    </div>
  )
}

export default MainPage
