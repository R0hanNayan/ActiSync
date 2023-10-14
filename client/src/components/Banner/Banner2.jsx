import React from "react";
import "./banner.css";

function Banner2(){
    return(
        <div className="Banner">
            <div className="Banner-Content">
                <h1 id="BannerTitle">
                    Track Your Daily Activities
                </h1>
                <p id="BannerText">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                </p>
            </div>
            <div className="Banner-img">
                <img id="bannerImg" src="./assets/banner-img.png" alt="banner" />
            </div>
        </div>
    )
}

export default Banner2;