import axios from 'axios'

const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_API_TOKEN

const weather = axios.create({
  baseURL: WEATHER_URL,
})

// Get initial Current Weather Conditions
export const searchCurrentCondition = async (cityOrZipText) => {
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
    //console.log(response.status)
    window.location = '/badrequest'
  } else {
    const data = await response.json()
    //console.log(data)
    return data
  }
}
