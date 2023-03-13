import React from 'react'
import './StyleCard.css'

const Card = (props) => {
  return (
    
    <main className="card">
    
      <h1> Hola {props.name}! </h1>
      <span> Sabemos que tu Canción Favorito es: </span>
      <p className='music'> {props.song} </p>
        
    </main>
  )
}

export default Card
