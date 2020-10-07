import {SEARCH_TITLE, FILTER_TITLE, FETCH_TITLES} from './types';

export const searchTitle = text => dispatch =>{
    dispatch({
        type: SEARCH_TITLE,
        payload: text,
  
    });
}

export const fetchTitle = titles => {
 return{
    type:FETCH_TITLES,
    payload:titles

 } 
};
 export const filterTitle= text => dispatch =>{
    dispatch({
         type:FILTER_TITLE,
      payload:
      {text:text
        
      },
     })
 }

