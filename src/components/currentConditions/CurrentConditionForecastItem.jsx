function CurrentConditionForecastItem({ forecast: { date, date_epoch, day } }) {
  //console.log(date_epoch)
  console.log(day.condition.icon)
  const timestamp = date_epoch
  //console.log(timestamp)
  const a = new Date(timestamp * 1000)
  //console.log(a)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const dayOfWeek = days[a.getDay()]
  console.log(dayOfWeek)
  return (
    <div className='grid forecast-grid border-t border-[#f4f4f4] py-[5px] justify-center items-center'>
      <div>{dayOfWeek}</div>
      <div className='w-fit md:w-auto'>
        <img
          className='m-auto'
          src={day.condition.icon}
          width='35'
          height='35'
          alt='Current Conditions'
        />
      </div>
      <div className='flex justify-end items-center'>
        <div>
          {Math.round(day.mintemp_f)}&#176;<span className='ml-0.5'>F</span>
        </div>
        <div className='w-[50px] h-[5px] mx-[5px] rounded-[5px] temperature-gradient'></div>
        <div>
          {Math.round(day.maxtemp_f)}&#176;<span className='ml-0.5'>F</span>
        </div>
      </div>
    </div>
  )
}

export default CurrentConditionForecastItem
