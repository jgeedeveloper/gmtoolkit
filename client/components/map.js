import React from 'react'
import L from 'leaflet'

class LeafletMap extends React.Component {
  componentDidMount() {
    this.map = L.map('mapContainer', {crs: L.CRS.Simple, minZoom: -5})
    var bounds = [[0, 0], [660, 1020]]
    L.imageOverlay(
      'https://media.wizards.com/2015/images/dnd/resources/Sword-Coast-Map_MedRes.jpg',
      bounds
    ).addTo(this.map)
    this.map.fitBounds(bounds)

    //icons

    //markers
    var neverwinter = L.marker([524, 406.3]).addTo(this.map)
    neverwinter.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Neverwinter" target="_blank"><b>More Info</b></a>'
    )
    neverwinter.bindTooltip('Neverwinter')

    var helmsHold = L.marker([518, 417.5]).addTo(this.map)
    helmsHold.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Helm%27s_Hold" target="_blank"><b>More Info</b></a>'
    )
    helmsHold.bindTooltip("Helm's Hold")

    var gauntlgrym = L.marker([547.8, 418.5]).addTo(this.map)
    gauntlgrym.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Gauntlgrym" target="_blank"><b>More Info</b></a>'
    )
    gauntlgrym.bindTooltip('Gauntlgrym')

    var trollbarkForest = L.marker([330, 510]).addTo(this.map)
    trollbarkForest.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Trollbark_Forest" target="_blank"><b>More Info</b></a>'
    )
    trollbarkForest.bindTooltip('Trollbark Forest')

    var highIce = L.marker([565, 780]).addTo(this.map)
    highIce.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/High_Ice" target="_blank"><b>More Info</b></a>'
    )
    highIce.bindTooltip('High Ice')

    var tracklessSea = L.marker([470, 170]).addTo(this.map)
    tracklessSea.bindPopup(
      '<a href="https://forgottenrealms.fandom.com/wiki/Trackless_Sea" target="_blank"><b>More Info</b></a>'
    )
    tracklessSea.bindTooltip('Trackless Sea')
  }

  //Layer Groups

  render() {
    return (
      <div className="components">
        <div id="mapContainer" />
      </div>
    )
  }
}

export default LeafletMap
