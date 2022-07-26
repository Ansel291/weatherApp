import { createContext, useState, useReducer } from 'react'
import weatherReducer from './WeatherReducer'

const WeatherContext = createContext()

/*
//const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_API_TOKEN
*/

export const WeatherProvider = ({ children }) => {
  const initialState = {
    currentConditions: [],
    currentConditionsSecondary: [],
    currentLocation: [],
    currentForecast: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(weatherReducer, initialState)

  /*
  // Get initial Current Weather Conditions
  const searchCurrentCondition = async (cityOrZipText) => {
    setLoading()

    const params = new URLSearchParams({
      key: `${WEATHER_TOKEN}`,
      q: cityOrZipText,
      days: '3',
      aqi: 'no',
      alerts: 'no',
    })

    //console.log(params)

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?${params}`
    )

    //console.log(response)

    if (response.status === 400) {
      console.log(response.status)
      window.location = '/badrequest'
    } else {
      const data = await response.json()
      //console.log(data)

      dispatch({
        type: 'GET_CURRENT',
        payload: data.current,
      })

      dispatch({
        type: 'GET_CURRENT_SECONDARY',
        payload: data.current.condition,
      })

      dispatch({
        type: 'GET_LOCATION',
        payload: data.location,
      })

      dispatch({
        type: 'GET_CURRENT_FORECAST',
        payload: data.forecast.forecastday,
      })
    }
  }
  */

  // Clear Current Weather Conditions from state
  //const clearCurrentConditions = () =>
  //dispatch({ type: 'CLEAR_CURRENT_CONDITIONS' })

  // Set Loading
  //const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <WeatherContext.Provider
      value={{
        /* currentConditions: state.currentConditions,
        currentConditionsSecondary: state.currentConditionsSecondary,
        currentLocation: state.currentLocation,
        currentForecast: state.currentForecast,
        loading: state.loading,
        */
        ...state,
        dispatch,
        //searchCurrentCondition,
        //clearCurrentConditions,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
