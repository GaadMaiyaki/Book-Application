export const Header = ()=>{
    return(
      <section className='position-fixed w-100  
        pl-5 pt-2 pr-5 mb-2 myshadow' style={{top:0, left:0, zIndex:99}}>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='text-dark'><h2>MBooks</h2></div>
          <div id='tag'>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Request</a>
            <a href="#">Signing</a>
          </div>
        </div>
      </section>
    )
  }