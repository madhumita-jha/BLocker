import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import "./Login";
 const MediaPage = () => {
    return(
    <>
    <div className="cards">
        <div className="image2"></div>
        <div className="card1">
            <button className="button5">< Link to="/media">MEDIA</Link></button>
        </div>
        <div className="image3"></div>
        <div className="card2">
            <button className="button6"> <Link to="/documents">DOCUMENTS</Link></button>
        </div>
        </div>
    </>
    )
}
export default MediaPage;