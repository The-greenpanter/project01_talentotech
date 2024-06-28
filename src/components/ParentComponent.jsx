import React, { useState } from 'react'
import ChildCompponent from './ChildCompponent'

export const ParentComponent = () => {
    const [ message ] = useState("Yo Soy Tu Padre!!!");
    const [ response, setResponse ] = useState();
    const handleChildResponse = (childMessage)=> {
        setResponse(childMessage);
    }
return (
    <div className='parent'>
        <h2>Parent Component</h2>
        <ChildCompponent message={message} onRespond={handleChildResponse}/>
        {response}
    </div>
  )
}
