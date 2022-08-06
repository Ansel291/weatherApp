function About() {
  return (
    <div className='max-w-2xl mx-auto conditions-text-color'>
      <h1 className='text-[26.5px] md:text-[32px] mb-[15px] tracking-[.25px]'>
        Weather App
      </h1>
      <p className='mb-[20px] text-[17px] md:text-[19px] font-light leading-[23px] md:leading-[28px]'>
        A React App that searches for live weather conditions by city or zip
        code as well as displaying the 3-day forecast and 24-hour temperatures.
      </p>
      <p className='text-[16px] md:text-[19px] font-light'>
        <span className='font-bold'>Version:</span> 1.0.0
      </p>
    </div>
  )
}

export default About
