import React from 'react'
import L from 'leaflet'

// var mymap = L.map('mapid').setView([51.505, -0.09], 13)

class Map extends React.Component {
  render() {
    return (
      <div className="components">
        <div>This is the Map Component</div>
        <div id="mapid" />
      </div>
    )
  }
}

export default Map
