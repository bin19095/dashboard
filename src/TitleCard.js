import React, {useState} from 'react'
import {Avatar} from '@material-ui/core';
import './TitleCards.css';
function TitleCard(props,{start}) {
    const [show,setShow] = useState(false);
    var num=0;
    const {star}=props;
    num={star}
    const handleMouseHover =() =>{
        setShow(!show);
    }

    return (
   <div className=" title__card" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
   
                <h1>    <Avatar alt={props.name} className="title__avatar" >
                {props.name.charAt(0)}
                </Avatar> {props.name} </h1>
                {show ? (<span>{props.com}{props.size} {props.date}</span>)
                        : null
                        }


   <table className="ui celled padded table">
  

  <thead>
    <tr><th className="single line">
        <br/>
   <div>
   {Array(num)
                .fill().map((_, i) =>(
                    <p key={Math.random()*100+i}>🌟</p>
                ))}
                Software Name
               </div>
               
        Evidence Rating</th>
      <th>Functionality</th>
      <th>Pros</th>
      <th>Cons</th>
      <th>header</th>
      <th>Comments</th>
    </tr></thead>
  <tbody>
    <tr>
      <td>
                    <h2 className="ui center ">{props.app}</h2>
      </td>
      <td className="single line">
      {typeof(star)}
   {star}/5
      </td>
      <td className="">
      {props.pros}
      </td>
      <td>
      {props.cons}

      </td>
      <td className="right aligned">
      <br />
       {props.header}
      </td>
      <td>{props.summary}</td>
    </tr>
    
  </tbody>
 
</table>

    </div>

    )
}

export default TitleCard
