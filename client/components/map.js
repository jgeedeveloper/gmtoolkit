import React from 'react'
import L from 'leaflet'

class LeafletMap extends React.Component {
  componentDidMount() {
    this.map = L.map('mapContainer').setView([51.505, -0.09], 13)
    var layer = L.tileLayer(
      'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors, &copy; <ahref="https://carto.com/attributions">CARTO</a>'
      }
    ).addTo(this.map)
  }
  render() {
    return (
      <div className="components">
        <div id="mapContainer" />
      </div>
    )
  }
}

export default LeafletMap
