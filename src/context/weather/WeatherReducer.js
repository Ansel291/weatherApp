const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CURRENT':
      return {
        ...state,
        currentConditions: action.payload,
        loading: false,
      }
    case 'GET_CURRENT_SECONDARY':
      return {
        ...state,
        currentConditionsSecondary: action.payload,
        loading: false,
      }
    case 'GET_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default weatherReducer
