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
    loading: false,
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
  
  const Http = new XMLHttpRequest()
  var bdcApi = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

  navigator.geolocation.getCurrentPosition(
    (position) => {
      bdcApi =
        bdcApi +
        '?latitude=' +
        position.coords.latitude +
        '&longitude=' +
        position.coords.longitude +
        '&localityLanguage=en'
      getApi(bdcApi)
    },
    (err) => {
      getApi(bdcApi)
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
    }
  )

  function getApi(bdcApi) {
    Http.open('GET', bdcApi)
    Http.send()
    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText).city)
      }
    }
  }

  */
  }

  // Get initial Current Weather Conditions (testing purposes)
  const fetchCurrentCondition = async () => {
    setLoading()
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_TOKEN}&q=Farmers Branch&aqi=no`
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

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

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
