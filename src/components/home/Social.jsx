import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
           
        
            <a href="https://github.com/slamasamar4" className="slamasamar4" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/samar-slama430/" className="samar-slama430/" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;