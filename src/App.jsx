import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const nameSurname= "Duygu Yılmaz";
  const students= 52000;
  let dogruMu= false;
  const date= "date";
  const url= "https://picsum.photos/250/250";

  return (
    // <>
    // <h4>İsim Soyisim: {nameSurname} </h4>
    // <p>Öğrenci Sayısı: {students}</p>
    // <p>Doğru mu: {dogruMu}</p>
    // <input type={date}/>
    // {dogruMu ?<h1>İsim Soyisim: {nameSurname} </h1> : <p>Öğrenci Sayısı: {students}</p> }
    // <img src={url} alt="" />
    // </>

    // <div className='box'>

    // </div>

    // style attribute u obje olarak verilmeli
    //jsx in içine CSS yazmak: 
    <div style={
      {
          backgroundColor:"red",
          width: "250px",
          height:"250px"
      }
    }></div>
  )
}

export default App
