const BackgroundImg = ({content, img}) => {

    return (
      <div>
         {content === 'youniverse' ?       
      <div className='youniverse-image'>
          <h1 className="container-spacing"></h1>
      </div>
          :
      <div className='background-image' style={{backgroundImage: `url(${img})`}}>
          <h1 className="container-spacing"></h1>
      </div>
        }
      </div>

    )
  }
  
  
  export default BackgroundImg