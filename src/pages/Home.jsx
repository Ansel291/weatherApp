import CurrentCondition from '../components/currentConditions/CurrentCondition'
import CurrentConditionSearch from '../components/currentConditions/CurrentConditionSearch'
import CurrentConditionForecast from '../components/currentConditions/CurrentConditionForecast'

function Home() {
  return (
    <>
      <CurrentConditionSearch />
      <CurrentCondition />
      <CurrentConditionForecast />
    </>
  )
}

export default Home
