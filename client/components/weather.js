import React from 'react'

const Weather = () => (
  <div className="components">
    Time of the Year:{' '}
    <select>
      <option>--Select from Below--</option>
      <option value="Summer">Summer</option>
      <option value="Summer-Fall">Summer-Fall</option>
      <option value="Fall">Fall</option>
      <option value="Fall-Winter">Fall-Winter</option>
      <option value="Winter">Winter</option>
      <option value="Winter-Spring">Winter-Spring</option>
      <option value="Spring">Spring</option>
      <option value="Spring-Summer">Spring-Summer</option>
    </select>
    <div>
      <button type="button">Generate Forecast</button>
    </div>
    <div />
  </div>
)

export default Weather
