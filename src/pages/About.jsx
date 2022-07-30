function About() {
  return (
    <div className='max-w-2xl mx-auto conditions-text-color'>
      <h1 className='text-[26.5px] md:text-[30px] mb-[18px] tracking-[.25px]'>
        Weather App
      </h1>
      <p className='mb-[20px] text-[16px] md:text-[19px] font-light'>
        A React App that searches for live current weather conditions by city or
        zip code as well as displaying the 3-day forecast.
      </p>
      <p className='text-[16px] md:text-[19px] font-light'>
        <span className='font-bold'>Version:</span> 1.0.0
      </p>
    </div>
  )
}

export default About
