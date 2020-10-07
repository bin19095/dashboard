import React, { useState } from 'react'
import './Content3.css';

var imgCount=0;
function Content3() {
    const [path, setPath] = useState('/static/media/Amobileusers.3afcea1e.JPG');
    var context = require.context("./img/media", true, /\.(JPG)$/);
    let pathTemp = [];
    let filenameTemp = [];
    let count = 0;
    var files = {};
    context.keys().forEach((filename) => {
    filenameTemp = context(filename);
    files[filename] = filenameTemp; //you have file contents in the 'files' object, with filenames as keys
    });

    let entries = Object.entries(files);

    entries.forEach(([prop, val]) => {
    pathTemp[count] = val;
    count++;
    
    
});


const changeImg = () =>{
    if (imgCount >= 0 && imgCount < pathTemp.length){
    setPath(pathTemp[imgCount])
    imgCount++ ;
    console.log("counting image",path, imgCount);  
}
    if(imgCount == pathTemp.length){
        imgCount=0;
    }
    
}
const prevImg = () =>{
    if (imgCount >= 0 && imgCount < pathTemp.length){
    setPath(pathTemp[imgCount])
    --imgCount ;
    console.log("counting image",path, imgCount);  
}
    if(imgCount <= 0){
        imgCount=pathTemp.length;
    }
    
}

    return (
        <div className="content3">
         
            <div className="image__part">   
            <a style={{color:'green'}} href={`https://datareportal.com/reports/digital-2020-australia?rq=social%20media%20users%20in%20Australia`}>
            Source

            </a>
            <button  className="prev__step" onClick={prevImg}>
              <h1>   	&lt;&lt; </h1>
            </button>
            
            <img src={path}></img>
            <button  className="next__step" onClick={changeImg}>
              <h1> &gt;&gt; </h1>
            </button>
            </div>
            
            <div  className="image__part2" style={{marginLeft:'20%'}}>
            <h1>
            <a href={`https://www.statista.com/statistics/268136/top-15-countries-based-on-number-of-facebook-users/" 
            ="nofollow`}>
                <img src="https://www.statista.com/graphic/1/268136/top-15-countries-based-on-number-of-facebook-users.jpg"
                 alt="Statistic: Leading countries based on Facebook audience size as of July 2020 (in millions) | Statista" 
                 style={{width: '100%', height: 'auto', maxWidth:'1000px', interpolationMode:'bicubic'}}
                 
                /></a>
                 <br />Find more statistics at 
             <a href={`https://www.statista.com`} rel="nofollow">Statista</a>
                </h1>
            </div>
        </div>
    )
}

export default Content3
