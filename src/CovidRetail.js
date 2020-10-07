import React from 'react'
import './CovidRetail.css';
function CovidRetail() {
    return (
        <div className="covid__content">
            <a href={`https://www.statista.com/chart/14011/e-commerce-share-of-total-retail-sales/"
             title="Infographic: COVID-19 Crisis Accelerates Shift to Online Retail | Statista`}>
                 <img src="https://cdn.statcdn.com/Infographic/images/normal/14011.jpeg" 
                 alt="Infographic: COVID-19 Crisis Accelerates Shift to Online Retail | Statista" 
                 width="100%" height="auto" style=
                 {{width:'100%', height: 'auto', maxWidth:'960px', interpolationMode:'bicubic'}}
                 
                
                 />
            </a> You will find more infographics at 
            <a href={`https://www.statista.com/chartoftheday/`}>Statista</a>
        </div>
    )
}

export default CovidRetail
