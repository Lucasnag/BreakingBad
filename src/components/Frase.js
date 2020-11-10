import React from 'react';
import './Frase.css'


const Frase = ({frase}) => {
    if(Object.keys(frase).length ===0) return null;
    return ( 
       
        <div className="frase">
        <h2 className="quote">{frase.quote}</h2>
        <p className='author'>{frase.author}</p>
        </div>
    )
}
 
export default Frase;
