import React from 'react'

const Button = ({text='Send'}) => {
    return (
        <>
         <button className="btn btn-pri"
         type='button'
         >
             {text}
         </button>   
        </>
    )
}


export default Button