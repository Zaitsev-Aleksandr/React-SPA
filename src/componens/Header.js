import React from 'react';


function Header(){
const  listArr=["Home", "photoapp","disign", "download"];
const listItem=listArr.map((e)=><li>{e}</li>)
    return(
        <div className="header"> <ul>{listItem}</ul></div>
    )
}




export default Header