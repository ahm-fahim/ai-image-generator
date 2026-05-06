import "react";
import "./Generator.css";
import defaultImg from "../../assets/default-image.png";

const Generator = () => {
    return (
        <div className="img-generator">

        <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image">
                    <img src={defaultImg} alt="Default" />
                </div>
            </div>
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Tell me what you long to see..." />
                <button className="generate-btn">Generate</button>
            </div>


        </div>
    
)};

export default Generator;
