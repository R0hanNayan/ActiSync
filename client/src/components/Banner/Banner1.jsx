import React from "react";
import "./banner.css";

function Banner1(){
    return(
        <div className="Banner">
            <div className="Banner-Content">
                <h1 id="BannerTitle">
                    Start Your Workout From Today
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

export default Banner1;