import React from "react";
import Img404 from "../assets/images/404.png"

export const NotFound = () => {
    return (
        <div className="container text-center" >
            <img className="" style={{width: 40 +'rem'}} src={Img404} alt="404"/>
        </div>
    )
}
export default NotFound;