import React,{ useState} from 'react'
import { connect } from 'react-redux';
import { fetchTitle, filterTitle } from './actions/searchActions';
import TitleCard from './TitleCard';
import ScrollButton from './ScrollButton';
function Content2(props) {
   const [show, setShow] = useState(false);

 
    const {titles, reviews}=props;
    let titleContent=' ';
  titleContent = titles.length > 0 ? titles.map((title,index) => <TitleCard key={index} 
  name={title.name}
  app={title.App}
  date={title.date}
  header={title.header}
  summary={title.summary} 
  comp={title.comp}
  size={title.comp_size}
  pros={title.pros}
  cons={title.cons}
  star={parseInt(title.Functionality)}
  />) : "Error";
  let filteredContent='';
if(reviews!=null){
  
  filteredContent = reviews.length> 0 ? reviews.map((review,index) =><TitleCard key={index} 
  name={review.name}
  app={review.App}
  date={review.date}
  header={review.header}
  comp={review.comp}
  size={review.comp_size}
  summary={review.summary} 
  pros={review.pros}
  cons={review.cons}
  star={parseInt(review.Functionality)}
 />) : 'Nothing to Display'
}
  console.log("filteredcontent",typeof filteredContent);    
  console.log("titlecontent",typeof titleContent);
    return (
        <div>
            <button style={{outline:'none', textDecoration: 'underline',color:'blue',border:'none',cursor:'pointer'}} onClick={() => setShow(!show)}> {show ? <h4>Hide All content </h4> :<h2>  See All Content </h2>}  </button>
            {show ? <div> {titleContent} </div> : null}
            {reviews!=null ? <div class="ui right pointing red basic label">
      {reviews.length}
    </div>: <b style={{color:'red'}}>No Queries Inserted to  Search </b>}
            <div><b>Filtered Content</b> { filteredContent}</div>
            
          	<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>

           
        </div>
    )
}
const mapStateToProps = (state) =>({
    titles:state.titles.titles,
    reviews: state.titles.reviews
})
export default connect(mapStateToProps, {fetchTitle,filterTitle})(Content2);
