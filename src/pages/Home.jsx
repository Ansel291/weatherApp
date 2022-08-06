import CurrentCondition from '../components/currentConditions/CurrentCondition'
import CurrentConditionSearch from '../components/currentConditions/CurrentConditionSearch'
import CurrentConditionForecast from '../components/currentConditions/CurrentConditionForecast'
import CurrentConditionHourly from '../components/currentConditions/CurrentConditionHourly'

function Home() {
  return (
    <>
      <CurrentConditionSearch />
      <CurrentCondition />
      <CurrentConditionForecast />
      <CurrentConditionHourly />
    </>
  )
}

export default Home
