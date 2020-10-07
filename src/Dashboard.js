import React from 'react'
import Sidebar from './Sidebar';
import Mainbar from'./Mainbar';
import Content1 from './Content1';
import './Dashboard.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Header'
function Dashboard() {
    return (
        <div className="dashboard__content">
         
             <div className="dashboard__right">             
                    <Sidebar/>
          
            </div>
            <div className="dashboar__left">
                <Mainbar/>
            </div>

        </div>
    )
}

export default Dashboard
