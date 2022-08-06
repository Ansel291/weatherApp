import PropTypes from 'prop-types'

function CurrentConditionHourlyItem({ hourly }) {
  const { time, temp_f, condition } = hourly

  let date = new Date(time.replace(/-/g, '/'))

  let hours = date.getHours()

  let AmOrPm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12 || 12

  let finalTime = hours + AmOrPm

  return (
    <div className='flex-none py-[10px] px-[17.5px] md:px-[20px] first:pl-[0px] last:pr-[0px]'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative top-[2.5px]'>{finalTime}</div>
        <img
          src={condition.icon}
          width='35'
          height='35'
          alt='Hourly Condition'
        />
        <div className='relative bottom-[2.5px]'>
          {Math.round(temp_f)}&#176;
        </div>
      </div>
    </div>
  )
}

CurrentConditionHourlyItem.propTypes = {
  hourly: PropTypes.object.isRequired,
}

export default CurrentConditionHourlyItem
