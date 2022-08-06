//const WEATHER_URL = process.env.REACT_APP_WEATHER_API_URL
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_API_TOKEN

// Get initial Current Weather Conditions
export const searchCurrentCondition = async (cityOrZipText) => {
  const params = new URLSearchParams({
    key: `${WEATHER_TOKEN}`,
    q: cityOrZipText,
    days: '3',
    aqi: 'no',
    alerts: 'no',
  })

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?${params}`
  )

  if (response.status === 400) {
    window.location = '/badrequest'
  } else {
    const data = await response.json()

    return data
  }
}
