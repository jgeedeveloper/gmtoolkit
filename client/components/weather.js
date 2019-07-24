import React from 'react'

class Weather extends React.Component {
  render() {
    return (
      <div className="components">
        <div>
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
        </div>
        <br />
        <div>
          <button type="button">Generate Forecast</button>
        </div>
        <br />
        <div className="container">
          <div>Results:</div>
          <div>D6 Chosen "1-6"</div>
          <div>Effects:</div>
        </div>
      </div>
    )
  }
}

export default Weather
