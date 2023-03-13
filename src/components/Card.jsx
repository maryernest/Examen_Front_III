import React from 'react'
import { Input } from './CardStyle'

const Card = (props) => {
  return (
    
    <div
    style={{
     
      position:"absolute",
      left:"530px",
      top:"200px",
      backgroundColor:"#E12FAE",
      borderRadius:"10px",
      marginTop:"15px",
      padding:"20px",
      width:"22%",
      height:"120px",
      boxShadow:"0px 20px 20px 20px rgba(0,0,0)",
      
    }}
    
    >
        <h1
        style={{
          fontSize:"20px"
        }}
        >Hola {props.name}!</h1>
        <p
        style={{
          fontWeight:"bold"
        }}
        >Sabemos que tu Canción Favorito es:</p>
        <p
        style={{
          
          textAlign:"center",
          backgroundColor:"#07857F",
          fontSize:"20px",
          fontWeight:"bold",
          boxShadow:"0px 0px 10px 0px rgba(0,0,0)",
          borderRadius:"5px",
          
        }}
        >{props.music}</p>
        
    </div>
  )
}

export default Card
