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

    var neverwinter = L.marker(L.latLng([524, 406.3])).addTo(this.map)
    neverwinter.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Neverwinter" target="_blank"><b>Neverwinter</b></a>'
    )

    var trollbarkForest = L.marker(L.latLng([330, 510])).addTo(this.map)
    trollbarkForest.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Trollbark_Forest" target="_blank"><b>Trollbark Forest</b></a>'
    )
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
