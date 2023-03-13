import React, { useState }  from 'react'
import Card from './Card'
import { Input } from './FormularioStyle'


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [musica, setMusica] = useState("");
    const [validar, setValidar] = useState(false);
    const [carta, setCarta] = useState(false);


    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nombre);
        console.log(musica);

        let validarTresCaracteres = false;
        let validarSeisCaracteres = false;

        if (nombre.trim().length >= 3) {
            console.log("Es Mayor a 3 Caracteres");
            validarTresCaracteres = true;
        }else{
            console.log("Es Menor a 3 Caracteres");
            validarTresCaracteres = false;
        }


        if (musica.length >= 6) {
            console.log("Es Mayor a 6 Caracteres");
            validarSeisCaracteres = true;
        }else{
            console.log("Es Menor a 6 Caracteres");
            validarSeisCaracteres = false;
        }
        
        if (validarTresCaracteres === true && validarSeisCaracteres === true) {
            setValidar(false); 
            setCarta (true);          
        }else{
            setValidar(true);
            setCarta (false);

        }

        // setNombre("");
        // setColor("");
        
    }
    

    return (
        <div 
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            minWidth:"1280px",
            minHeight:"600px",
            backgroundImage:"url(http://radio.uabc.mx/sites/default/files/imagenes/podcast/cerebro-notas-musicales.jpg)",
            backgroundSize:"cover ",
          
          
           
            
        }}>
            <div
            style={{  
                position:"relative",
                top:"0px",
            }}
            >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4uAvLSYjEcNB7mHHtSQTusikNdnOTvsPjkrFNw610P7zgVyqS2_RIULsJenc2jLLOno&usqp=CAU"
                style={{
                    
                    position:"absolute",
                    borderRadius:"50%",
                    boxShadow:"10px 15px 15px 0px rgba(0,0,0)",
                    height:"100px", 
                    width:"150px",  
                    padding:"5px",
                    right:"-85px",
                    top:"10px",
                }}
                />
            </div>

            <form id='formu' onSubmit={handleSubmit} 
            style={{
                backgroundColor:"#5D6D7E", 
                boxShadow:"10px 10px 20px 0px rgba(0,0,0)",
                borderRadius:"10px",
                padding:"10px",
                height:"300px",
                width:"330px",
                
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"flex-end",
                gap:"10px",
            }}>
                <Input 
                type={"text"} 
                placeholder={`Ingresa tu Nombre: `} 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 

                style={{
                    backgroundColor:"#ECF0F1",
                    boxShadow:"5px 5px 20px 0px rgba(0,0,0)",
                    
                }}
                />

                <Input 
                type={"text"} 
                placeholder={`Ingresa tu Canción Favorita: `} 
                value={musica} 
                onChange={(e) => setMusica(e.target.value)}   

                style={{
                    backgroundColor:"#ECF0F1",
                    boxShadow:"5px 5px 20px 0px rgba(0,0,0)",
                    
                }}
                />
            <div>
                <button form='formu' btn="submit">Enviar</button>
            </div>
              
            </form>


            {
                validar && (<p
                    style={{
     
                        position:"absolute",
                        left:"530px",
                        top:"250px",
                        backgroundColor:"yellow",
                        color:"blue",
                        borderRadius:"10px",
                        paddingTop:"15px",
                        width:"20%",
                        height:"50px",
                        boxShadow:"0px 20px 20px 20px rgba(0,0,0)",
                        textAlign:"center",
                        fontWeight:"bold",
                        
                      }}
                      
                >Por favor verifique sus datos</p>)
            }
            {
                carta && (  

                   <Card name={nombre} music={musica} />
                )
            }
        </div>

    )
}

export default Formulario
