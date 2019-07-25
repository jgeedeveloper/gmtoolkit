import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home, Encounter, Treasure, Weather, LeafletMap} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route path="/encounterGenerator" component={Encounter} />
        <Route path="/treasureGenerator" component={Treasure} />
        <Route path="/weatherGenerator" component={Weather} />
        <Route path="/map" component={LeafletMap} />
      </Switch>
    )
  }
}

export default Routes
