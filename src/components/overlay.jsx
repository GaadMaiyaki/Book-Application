export const Overlay = ()=>{
    return(
      <section className="mycolor d-flex align-items-center justify-content-center" style={{zIndex:-99}}>
          <div className='position-absolute w-100 h-100' style={{top:0, left:0, background: 'rgba(3,4,6,0.9)'}}></div>
        <div className="text-center position-absolute p-5 rounded adj">
          <h1 className="" >
            We Sell You Fascninating Books! <br></br> You Can Always Read More
          </h1>
        </div>
      </section>
    );
}