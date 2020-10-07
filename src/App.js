import React, { Component} from 'react';

import './App.css';
import $ from 'jquery'
import count from './img/count.JPG'
import Iframe from 'react-iframe';
import ImageContent from './ImageContent';
import Pdf from "react-to-pdf";

import Header from "./Header.js";
import Community from './Community';
import Blogs from './Blog';
import Dashboard from './Dashboard';
import TitleCard from './TitleCard';




import {BrowserRouter as Router, Switch, Route,
Link
} from 'react-router-dom';

import DocsContent from './DocsContent';
class App extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      foo: 'add',
      resumeData: [],
      testData:[],
      show: false,
      InputText: 'Hello',
    };

    
  }
  getResumeData(){
  { $.ajax({
      url:'./data.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});

      }.bind(this),
      error: function(xhr,status,err){
        console.log(err);
        alert(err);
      }
    });
  }}

  testDatatest(){
this.setState({
  testData: this.props.titles
})
  }

  showPic = () =>{
  this.setState({
    show: !this.state.show
  })
 }


componentDidMount(){
  this.getResumeData();
  this.testDatatest();
}

  
  render(){
  
  

   const style={
     width: "100%",
     height: "auto !important",
     maxWidth:"1000px",
     interpolationMode: 'bicubic'
    

   }

   const ref = React.createRef();
   const options = {
    orientation: 'landscape'
 
};

    const temp="https://youtube.com/embed/8PKBjb8nyfA";
   const temp2="https://drive.google.com/embed/17pFMLG-Rn0vwMXC8cHt6mtU0f8kvd8eA/view?usp=sharing"

   return (
    <div  className="App">
        <Router>
             <Switch>
                 <Route exact path="/docs">
                   <Header/>
                  <DocsContent/>
                 </Route>

                 <Route  exact path="/blogs">
                 <Header/>
                     <Blogs/>
                 </Route>

                 <Route  exact path="/community">
                    <Header/>
                    <Community/>
                 </Route>

                 <Route exact path="/">
                 <Header/>
                     <Dashboard />
                 </Route>

                 <Route exact path="/use1">
                 <Header/>
                     <Dashboard />
                     
                 </Route>
                 <Route exact path="/use2">
                 <Header/>
                     <Dashboard />
                  
                 </Route>
                 <Route exact path="/use3">
                 <Header/>
                     <Dashboard />
                  
                 </Route>
                 <Route exact path="/use4">
                 <Header/>
                     <Dashboard />
                  
                 </Route>
             </Switch>
             </Router>
      <div className="bottom__content" style={{display:'none'}} >
        testing
        <h1>Bottom Content Footer {this.state.InputText}</h1>    
        <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={.5} y={.5} scale={0.8}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
      <div>
      <div  width="100" height="100" ref={ref}>
            The content is all here does it worldbank<p>HEllo world</p>
        </div>
      <div>
          <p>All further information on this statistic can be found at  <a href="https://www.statista.com/statistics/733657/global-cybersecurity-index-gci-countries/" rel="nofollow">Statista</a></p>
      </div>
      <div ref={ref}>
        <ImageContent btnContent="Total Reviews" click={this.showPic} img={count} show={this.state.show} description=""/>
        <ImageContent btnContent="Total Reviews" click={this.showPic} img={count} show={this.state.show}/>
        </div>
    
      <Iframe url={temp}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      <div>
     
      <p>All further information on this statistic can be found at  <a href="https://www.statista.com/statistics/733657/global-cybersecurity-index-gci-countries/" rel="nofollow">Statista</a></p>

      </div>

      <div className="iframe__content">
      <iframe src="https://data.worldbank.org/share/widget?indicators=SE.ADT.LITR.ZS" width='450' height='300' frameBorder='0' scrolling="no" ></iframe>

      </div>
      <iframe src="https://data.worldbank.org/share/widget?indicators=SE.ADT.LITR.FE.ZS" width='450' height='300' frameBorder='0' scrolling="no" ></iframe>
   
  <div className="widget__content">
      Social Media Report
      <a href="https://www.statista.com/statistics/268136/top-15-countries-based-on-number-of-facebook-users/" rel="nofollow">
        <img src="https://www.statista.com/graphic/1/268136/top-15-countries-based-on-number-of-facebook-users.jpg" alt="Statistic: Leading countries based on Facebook audience size as of July 2020 (in millions) | Statista" 
        style={style}/>
        </a><br />Find more statistics at  
        <a href="https://www.statista.com" rel="nofollow">Statista</a>
  </div>
  
</div>
<div>
</div>


    
          
      </div>

    </div>
  );
  }
}


export default App;
