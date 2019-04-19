//reducer

// Lambda School = i<3Lambd4

import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    // ADD_FRIEND, 
    // ADD_FAILURE, 
    // DELETE_FRIEND, 
    // DELETE_FAILURE, 
    // UPDATE_SUCCESS, 
    // UPDATE_FAILURE 
  } from '../actions';
  
  const initialState = {
      friends: [],
      isfetching:false,
      error: null,
      fetchingFriends: false,
    loggingIn: false,
    updatingFriend: false,
    // errorStatusCode: null,//added
    deletingFriend: false,
    savingFriends: false,
  };


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START: 
            return {...state, error: '', errorStatusCode: null, isfetching: true,loggingIn: true};
      case LOGIN_SUCCESS: 
            return {...state,error: '',loggingIn: false};
    //   case FETCH_DATA_START:
    //         return { ...state, updating: true, error: state.error };
    //     case FETCH_DATA_SUCCESS:
    //         return { ...state, friends: action.payload, updating: false, error: null };
    //     case FETCH_DATA_FAILURE:
    //         return { ...state, updating: false, error: action.payload };
      case FETCH_DATA_START:
        return {
        ...state,
        isfetching: true,
        // friends: action.payload,
        // error: '',
        // fetchingData: true,
        //   errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          isfetching:false,
          friends: action.payload
              //   error: '',
           //   errorStatusCode: null,
             //   fetchingData: false,
            // .filter(price => price.type === 'Gasoline - Regular')
            // .filter(
            //   price =>
            //     price.location === 'US' || price.location === 'State of Hawaii'
            // )
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          isfetching:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

export default reducer;

//export const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_DATA_START:
//             return { ...state, updating: true, error: state.error };
//         case FETCH_DATA_SUCCESS:
//             return { ...state, friends: action.payload, updating: false, error: null };
//         case FETCH_DATA_FAILURE:
//             return { ...state, updating: false, error: action.payload };
//         case ADD_FRIEND:
//             return { ...state, friends: action.payload, updating: false, error: null };
//         case ADD_FAILURE:
//             return { ...state, updating: false, error: action.payload };
//         case DELETE_FRIEND:
//             return { ...state, friends: action.payload, updating: false, error: null };
//         case DELETE_FAILURE:
//             return { ...state, updating: false, error: action.payload };
//         case UPDATE_SUCCESS:
//             return { ...state, friends: action.payload, updating: false, error: null };
//         case UPDATE_FAILURE:
//             return { ...state, updating: false, error: action.payload };
//         default:
//             return state;
//     }
// }
