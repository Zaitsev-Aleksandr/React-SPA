import React from "react"
import img from "../img/img.jpg"
import FirstText from "./FirstText"
import SecondText from  "./SecondText"
import Button from "./ButtonComponent";

function Body() {
    return (
        <div className="body">
            <img src={img}/>
            <h1> RAPPRESENT YOUR LIFE WITH A SIMPLE PHOTO</h1>
            <FirstText/>
            <SecondText/>
            <Button name={"GET STARTED"}/>
        </div>
    )

}

export default Body