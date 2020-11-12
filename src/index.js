import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pic from './pictures/photo.jpg';
import {book_array} from './components/book';
import {Header} from './components/header';
import {Overlay} from './components/overlay';



// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';

function BookList(  ){
  return (
  <header className="text-secondary position-relative m-0">
      <Header/>
      <Overlay/>
      <Contain/>
  </header>
  );
}







const Contain =()=>{
  return (
      <section className='container mt-5'>
          <div className='row'>
            <BookLists/>
          </div>
      </section> 
    );
    
}
const BookLists =()=>{
  return (
    book_array.map((v, i)=> {
      const {img, title, author} = v;
      return(
          <Book {...v} key={i}/>
    )}))
}

const Book = ({img, title, author})=>{
  
  return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-4 p-2 border border-secondary'>
        <div className='p-5 bg-light position-relative'>
          <aside className='position-relative'>
          <div className="position-absolute booktitle">{title}</div>
            <img src={pic} width='100%' height="100%" className="img-fluid rounded" alt="Book"/>
          </aside>
          <div className='bg-white mt-1 rounded shadow shadom-sm pl-2 pb-2'>
            <h5 className='text-dark'>{title}</h5>
            <h6><i>{author}</i></h6>
            <button className='btn btn-sm btn-dark' onClick={()=> clickHandler(title)}>My Book</button>
          </div>
        </div>
      </div>
  );
}

const clickHandler = (e) =>{
  console.log(e);
  console.log(e.target)
  // alert('i am a man')
}
ReactDOM.render(<BookList />, document.getElementById('root'));


reportWebVitals();
