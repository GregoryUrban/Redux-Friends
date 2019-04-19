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
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    isfetching:false,
    error: null,
    updatingFriend: false,
    // errorStatusCode: null,//added
    deletingFriend: false,
    savingFriends: false,
  };


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START: 
            return {...state, error: '', errorStatusCode: null, fetchingData: false,loggingIn: true};
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
          error: '',
          fetchingData: true,
          errorStatusCode: null
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingData: false,
          friends: action.payload
            .filter(price => price.type === 'Gasoline - Regular')
            .filter(
              price =>
                price.location === 'US' || price.location === 'State of Hawaii'
            )
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          fetchingData: false,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status
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
