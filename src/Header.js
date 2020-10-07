import React, { Component } from 'react'
import './Header.css';
import {bindActionCreators} from 'redux';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import {BrowserRouter as Router, Switch, Route,
    Link
    } from 'react-router-dom';

import {connect} from 'react-redux';
import { searchTitle, fetchTitle,filterTitle } from './actions/searchActions';
class Header extends Component {


  onChange = e => {
    this.props.searchTitle(e.target.value);

  };

  onSubmit = e =>{
    e.preventDefault();
    this.props.filterTitle(this.props.text);
    console.log("clicked",this.props.text);
   
  };
  
  render(){
   
    return (
        <div className="header">

            <div className="header__top">
              {/*Header Top left link */}
              {}
           
               <div className="header__top__left">   
             <ul>
                <li>
                  <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to="/docs">     Docs </Link>
                </li>
                <li>
                  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/blogs">  Blog </Link>
                </li>
                <li>
                  <Link  style={{ color: 'inherit', textDecoration: 'inherit'}} to="/community">  Community </Link>
                </li>
             </ul>
             </div>
                 {/*Header Top right link */}
             <div className="header__top__right">
               
            
                  <form onSubmit={this.onSubmit}>
                  <div className="ui icon input">
                  <input type="search" placeholder="Search..."
                  onChange={this.onChange}
                  />
                             
                              <button className="ui button">
                              <i className="inverted circular search link icon" style={{borderRadius:'50%'}}></i>
                              </button>
                            </div>
                  </form>
                
              

              
             </div>

            
             

            </div>
            <div className="header__bottom">
                <div className="ani"><span></span></div>
             
               <div className="header__bottom_heading">
                   <br/>
            <Link to="/"   style={{ color: 'inherit', textDecoration: 'inherit'}} ><h1>Profile Listing And Property Management DashBoard</h1></Link>
           </div>
            </div>
        
        </div>
    )
    
}
   

}
function mapStateToProps(state) {
console.log(state)
  return { text:state.titles.text

}

};





export default connect(
  mapStateToProps, { filterTitle,searchTitle, fetchTitle}
)(Header);
