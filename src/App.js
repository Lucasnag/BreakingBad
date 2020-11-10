import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Container = styled.div`
display: flex;
align-items:center;
padding-rop: 5rem;
flex-direction:column;
`;


const Button = styled.button `
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: arial, helvetica, sans-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
`;

function App() {
// se agrega la frase al state para que se recargue automaticamente 
//x react

const [frase, guardarFrase] = useState ({});

// se utiliza fetch y async await para el pedido de la frase a la API
  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);

  }
// Se utiliza useEffect para que se dispare la frase cuando 
// se carga la API 

useEffect( () => {
  consultarApi()
},[]);



  return (
   
      <Container>
      <Frase
        frase={frase}
      />

        <Button
        onClick={consultarApi}
        >
          Obtener Frase
        </Button>

      </Container>
   
  );
}

export default App;
