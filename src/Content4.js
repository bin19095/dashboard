import React, { useState } from "react";
import './Content4.css';

 var imgCount=0;
function Content4() {
  const [path, setPath] = useState("static/media/ByIndustry.8ca52bb5.JPG");
  var context = require.context("./img/pn", true, /\.(JPG)$/);
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

  const changeImg = () => {
    if (imgCount >= 0 && imgCount < pathTemp.length) {
      setPath(pathTemp[imgCount]);
      imgCount++;
      console.log("counting image", path, imgCount);
    }
    if (imgCount == pathTemp.length) {
      imgCount = 0;
    }
  };
  const prevImg = () => {
    if (imgCount <= 0) {
        imgCount = pathTemp.length;
      }
    if (imgCount >= 0 && imgCount < pathTemp.length) {
      setPath(pathTemp[imgCount]);
      imgCount--;
      console.log("counting image", path, imgCount);
    }
  
  };
  return (
    <div className="content4">
        <a href={`https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/?source=post_page---------------------------#2` || `https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications/research/`}>
            Source
        </a>
      <div className="image__part">
        <button className="prev__step" onClick={prevImg}>
          <h1> &lt;&lt; </h1>
        </button>

        <img src={path}></img>
        <button className="next__step" onClick={changeImg}>
          <h1> &gt;&gt; </h1>
        </button>
      </div>
    </div>
  );
}

export default Content4;
