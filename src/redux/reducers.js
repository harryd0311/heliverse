import { combineReducers } from 'redux';

// Define initial state
const initialUserState = {
  searchQuery: '',
  selectedDomain: '',
  selectedGender: '',
  selectedAvailability: '',
};

const initialTeamState = [];

// Define user reducer
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_DOMAIN':
      return { ...state, selectedDomain: action.payload };
    case 'SET_SELECTED_GENDER':
      return { ...state, selectedGender: action.payload };
    case 'SET_SELECTED_AVAILABILITY':
      return { ...state, selectedAvailability: action.payload };
    default:
      return state;
  }
};

// Define team reducer
const teamReducer = (state = initialTeamState, action) => {
  switch (action.type) {
    case 'ADD_TO_TEAM':
      return [...state, action.payload];
    case 'REMOVE_FROM_TEAM':
      return state.filter((member) => member.id !== action.payload);
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer,
});

export default rootReducer;
