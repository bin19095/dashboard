import { SEARCH_TITLE, FETCH_TITLES,FILTER_TITLE} from '../actions/types';
const localData = require('../data/data.json');


const initialState={
    text: '',
    titles : localData,
    reviews:[]

}

export default function(state =initialState, action){
    console.log("action",action)
    switch(action.type){
        case SEARCH_TITLE:
            return{
                ...state,
                text: action.payload,
            };
            case FETCH_TITLES:
                return{
                    ...state,
                    titles: action.payload
                    
                }
                case FILTER_TITLE:


                    const {text} = action.payload;
                    console.log("texting",text);
                    console.warn('reducer',text);
                    return{...state,
                        text: text,
         reviews: text ? state.titles.filter(
                    val => val.App.toLowerCase().includes(text.toLowerCase())

                )
                : null,
                      
               
                };
                
                default: 
                return state;

    }
}