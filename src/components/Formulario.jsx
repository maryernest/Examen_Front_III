import React, { useState }  from 'react'
import Card from './Card'
import "./StyleFormulario.css"


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cancion, setCancion] = useState("");
  const [validar, setValidar] = useState(false);
  const [cartel, setCartel] = useState(false);


    
  const handleSubmit = (e) => {
    e.preventDefault();

      console.log(nombre);
      console.log(cancion);

      let validarTresCaracteres = false;
      let validarSeisCaracteres = false;

      if (nombre.trim().length >= 3) {
          console.log("Es Igual y Mayor a 3 Caracteres");
          validarTresCaracteres = true;
      }
      else{
          console.log("Es Menor a 3 Caracteres");
          validarTresCaracteres = false;
      }


      if (cancion.length >= 6) {
          console.log("Es Igual y Mayor a 6 Caracteres");
          validarSeisCaracteres = true;
      }
      else{
          console.log("Es Menor a 6 Caracteres");
          validarSeisCaracteres = false;
      }
      
      if (validarTresCaracteres === true && validarSeisCaracteres === true) {
          setValidar(false); 
          setCartel (true);          
      }else{
          setValidar(true);
          setCartel (false);

      }
    };
    

    return (
      <main className='container'>

        <div className='imagen'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4uAvLSYjEcNB7mHHtSQTusikNdnOTvsPjkrFNw610P7zgVyqS2_RIULsJenc2jLLOno&usqp=CAU"/>
        </div>

        <form id='formu' onSubmit={handleSubmit}>
          <input 
            id='ingresa'
            type={"text"} 
            placeholder={`Ingresa tu Nombre: `} 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)}>
          </input>

          <input 
            id='ingresa'
            type={"text"} 
            placeholder={`Ingresa tu Canción Favorita: `} 
            value={cancion} 
            onChange={(e) => setCancion(e.target.value)}>
          </input>

          <div>
            <button form='formu' btn="submit">Enviar</button>
          </div>
          
        </form>

        {
        validar && (<p className='mensaje'>Por favor verifique sus datos</p>)
        }
        {
          cartel && (<Card name={nombre} song={cancion} />)
        }
      </main>

    )
}

export default Formulario
