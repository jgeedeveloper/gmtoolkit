import React from 'react'
import L from 'leaflet'

class LeafletMap extends React.Component {
  componentDidMount() {
    this.map = L.map('mapContainer', {crs: L.CRS.Simple, minZoom: -5})
    var bounds = [[0, 0], [660, 1020]]
    L.imageOverlay(
      'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_HighRes.jpg',
      bounds
    ).addTo(this.map)
    this.map.fitBounds(bounds)

    var neverwinter = L.latLng([524, 406.3])
    L.marker(neverwinter).addTo(this.map)
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
