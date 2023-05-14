export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query,
  });
  
  export const setSelectedDomain = (domain) => ({
    type: 'SET_SELECTED_DOMAIN',
    payload: domain,
  });
  
  export const setSelectedGender = (gender) => ({
    type: 'SET_SELECTED_GENDER',
    payload: gender,
  });
  
  export const setSelectedAvailability = (availability) => ({
    type: 'SET_SELECTED_AVAILABILITY',
    payload: availability,
  });
  
  export const addToTeam = (user) => ({
    type: 'ADD_TO_TEAM',
    payload: user,
  });
  
  export const removeFromTeam = (userId) => ({
    type: 'REMOVE_FROM_TEAM',
    payload: userId,
  });
  