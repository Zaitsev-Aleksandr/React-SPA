import React from "react"

function Button(props) {
    let  buttonValua=props.name;
   return (
       <button>{buttonValua}</button>
   )
}

export default Button