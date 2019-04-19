//reducer
import {
    // LOGIN_START,
    // LOGIN_SUCCESS,
    // LOGIN_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_FRIEND, 
    ADD_FAILURE, 
    DELETE_FRIEND, 
    DELETE_FAILURE, 
    UPDATE_SUCCESS, 
    UPDATE_FAILURE 
  } from '../actions';
  
  const initialState = {
    friends: [],
    error: null,
    updating: true,
    // errorStatusCode: null,//added
    // fetchingData: false,
    // loggingIn: false,
    // deletingFriend: false,
    // savingFriends: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATING:
            return { ...state, updating: true, error: state.error };
        case FETCH_SUCCESS:
            return { ...state, friends: action.payload, updating: false, error: null };
        case FETCH_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case ADD_FRIEND:
            return { ...state, friends: action.payload, updating: false, error: null };
        case ADD_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case DELETE_FRIEND:
            return { ...state, friends: action.payload, updating: false, error: null };
        case DELETE_FAILURE:
            return { ...state, updating: false, error: action.payload };
        case UPDATE_SUCCESS:
            return { ...state, friends: action.payload, updating: false, error: null };
        case UPDATE_FAILURE:
            return { ...state, updating: false, error: action.payload };
        default:
            return state;
    }
}
  
  

//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case LOGIN_START:
//         return {
//           ...state,
//           error: '',
//           errorStatusCode: null,
//           fetchingData: false,
//           loggingIn: true
//         };
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           error: '',
//           loggingIn: false
//         };
//       case FETCH_DATA_START:
//         return {
//           ...state,
//           error: '',
//           fetchingData: true,
//           errorStatusCode: null
//         };
//       case FETCH_DATA_SUCCESS:
//         return {
//           ...state,
//           error: '',
//           errorStatusCode: null,
//           fetchingData: false,
//           friends: action.payload
//             .filter(price => price.type === 'Gasoline - Regular')
//             .filter(
//               price =>
//                 price.location === 'US' || price.location === 'State of Hawaii'
//             )
//         };
//       case FETCH_DATA_FAILURE:
//         return {
//           ...state,
//           fetchingData: false,
//           error: action.payload.data.error,
//           errorStatusCode: action.payload.status
//         };
//       default:
//         return state;
//     }
//   };

// export default reducer;
