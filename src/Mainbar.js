import React from 'react'
import './Mainbar.css';

import {Route} from 'react-router-dom';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Intro from './Introduction';
import Header from './Header';
function Mainbar() {
    return (
        <div className="mainbar">  
        <Route exact path="/">
            <Intro/>
        </Route>
          <Route exact path="/use1">
                
                     <Content1 />
         </Route>  
        <Route exact path="/use2">
               
                     <Content2 />
         </Route>
         <Route exact path="/use3">
              
                     <Content3 />
         </Route>
         <Route exact path="/use4">
               Waiting foir content 4
               <Content4/>
                     
         </Route>
         <Route exact path="/use4">
             Waiting for content 5
         </Route>
        </div>
    )
}

export default Mainbar
