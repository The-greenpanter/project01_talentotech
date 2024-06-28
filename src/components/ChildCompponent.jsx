import React from 'react'


const ChildCompponent = ({message, onRespond}) => {
    const handleClick = () => {
        onRespond("Yo Soy en hijo?")
    }
  return (
    <div className='child'>
      <h3 className="">Child Component </h3>
      <h3>Hola soy el hijo</h3>
      <p>{message}</p>
      <button onClick={handleClick}>Enviar respuesta al padre</button>
    </div>
  )
}

export default ChildCompponent
