import { createContext, useState, useReducer } from 'react'
import weatherReducer from './WeatherReducer'

const WeatherContext = createContext()

//const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_API_TOKEN

export const WeatherProvider = ({ children }) => {
  const initialState = {
    currentConditions: [],
    currentConditionsSecondary: [],
    currentLocation: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(weatherReducer, initialState)

  {
    /*
  const [currentConditions, setCurrentConditions] = useState([])
  const [currentConditionsSecondary, setCurrentConditionsSecondary] = useState(
    []
  )
  const [currentLocation, setCurrentLocation] = useState([])
  const [loading, setLoading] = useState(true)
  */
  }

  const fetchCurrentCondition = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=los angeles&aqi=no`
    )
    //console.log(response)

    const data = await response.json()
    //console.log(data)

    /*
    setCurrentConditions(data.current)
    //console.log(currentConditions)
    setCurrentConditionsSecondary(data.current.condition)
    //console.log(currentConditionsSecondary)
    setCurrentLocation(data.location)
    //console.log(currentLocation)
    setLoading(false)
    */

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
  }

  return (
    <WeatherContext.Provider
      value={{
        currentConditions: state.currentConditions,
        currentConditionsSecondary: state.currentConditionsSecondary,
        currentLocation: state.currentLocation,
        loading: state.loading,
        fetchCurrentCondition,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
