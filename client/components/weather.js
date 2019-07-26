/* eslint-disable complexity */
import React from 'react'

class Weather extends React.Component {
  constructor() {
    super()

    this.state = {
      selectedWeather: ''
    }
    this.generateWeather = this.generateWeather.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      selectedWeather: event.target.value
    })
  }

  generateWeather() {
    const roll = max => {
      return Math.floor(Math.random() * Math.floor(max))
    }
    let rollResult = roll(6) + 1
    switch (this.state.selectedWeather) {
      case 'Summer':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Heavy Winds'
            document.getElementById('weatherEffects').innerHTML =
              'Range Attacks: -2'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML = 'Very Hot'
            document.getElementById('weatherEffects').innerHTML =
              'Movement -10ft'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Hot'
            document.getElementById('weatherEffects').innerHTML =
              'Movement -5ft'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML = 'Warm'
            document.getElementById('weatherEffects').innerHTML = 'No Effects'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML = 'Clear'
            document.getElementById('weatherEffects').innerHTML = 'No Effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML =
              'Warm with Cool Breeze'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          default:
            break
        }
        break
      case 'Summer-Fall':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Hot'
            document.getElementById('weatherEffects').innerHTML =
              'Movement -5ft'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML = 'Warm'
            document.getElementById('weatherEffects').innerHTML = 'No Effects'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Clear'
            document.getElementById('weatherEffects').innerHTML = 'No Effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks -2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          default:
            break
        }
        break
      case 'Fall':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Rain'
            document.getElementById('weatherEffects').innerHTML =
              'Long Range reduced to Short Range'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML =
              'Clear and Cool'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks +2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Chilly and Overcast'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      case 'Fall-Winter':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Rain'
            document.getElementById('weatherEffects').innerHTML =
              'Long Range reduced to Short Range'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML =
              'Clear and Cool'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks +2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Chilly and Overcast'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      case 'Winter':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Snow'
            document.getElementById('weatherEffects').innerHTML =
              'Movement -5ft'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML = 'Freezing'
            document.getElementById('weatherEffects').innerHTML =
              'Roll hypothermia if away from warmth'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML = 'Hail'
            document.getElementById('weatherEffects').innerHTML =
              'Listen Checks -4'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Chilly and Overcast'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      case 'Winter-Spring':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Rain'
            document.getElementById('weatherEffects').innerHTML =
              'Long Range reduced to Short Range'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers, some Hail'
            document.getElementById('weatherEffects').innerHTML =
              'Listen Checks -2'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML =
              'Clear and Cool'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks +2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Chilly and Overcast'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      case 'Spring':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Rain'
            document.getElementById('weatherEffects').innerHTML =
              'Long Range reduced to Short Range'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML =
              'Clear and Cool'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks +2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML = 'Hot'
            document.getElementById('weatherEffects').innerHTML =
              'Movement -5ft'

            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      case 'Spring-Summer':
        switch (rollResult) {
          case 1:
            document.getElementById('weatherResult').innerHTML = 'Rain'
            document.getElementById('weatherEffects').innerHTML =
              'Long Range reduced to Short Range'
            break
          case 2:
            document.getElementById('weatherResult').innerHTML =
              'Scattered Showers'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 3:
            document.getElementById('weatherResult').innerHTML = 'Cloudy'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 4:
            document.getElementById('weatherResult').innerHTML =
              'Clear and Cool'
            document.getElementById('weatherEffects').innerHTML =
              'Spot Checks +2'
            break
          case 5:
            document.getElementById('weatherResult').innerHTML =
              'Chilly and Overcast'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break
          case 6:
            document.getElementById('weatherResult').innerHTML = 'Bright'
            document.getElementById('weatherEffects').innerHTML = 'No effects'
            break

          default:
            break
        }
        break
      default:
        document.getElementById('weatherResult').innerHTML = 'Choose a season'
        document.getElementById('weatherEffects').innerHTML = 'Choose a season'
        break
    }
  }

  render() {
    return (
      <div className="components">
        <div>
          Time of the Year:{' '}
          <select onChange={this.handleChange}>
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
          <button type="button" onClick={() => this.generateWeather()}>
            Generate Forecast
          </button>
        </div>
        <br />
        <div className="container">
          <div>Results:</div>
          <div id="weatherResult">Weather</div>
          <div id="weatherEffects">Effects</div>
        </div>
      </div>
    )
  }
}

export default Weather
