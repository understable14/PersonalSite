const Footer = ({language}) => {
  return (
    <div className="footer">
        <p>{language ? "Follow me on my socials" : "Segue-me nas redes sociais"}</p>
        <div className="socials-container">
            <a href="https://www.instagram.com/migueloliveira2414/" target='_blank'>Instagram</a>
            <a href="www.linkedin.com/in/miguel-oliveira-665a311b0" target='_blank'>LinkedIn</a>
            <a href="https://twitter.com/understable02" target='_blank'>Twitter</a>
        </div>
        <p>{language ? "Contact me on understable02@gmail.com" : "Contacta-me em understable02@gmail.com"}</p>
    </div>
  )
}

export default Footer
