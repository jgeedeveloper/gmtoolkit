import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>D&D 5e: GM TOOLKIT</h1>
    <hr />
    <nav>
      <Link to="/">
        <div className="tools">HOME</div>
      </Link>
      <Link to="/encounterGenerator">
        <div className="tools">Encounter Generator</div>
      </Link>
      <Link to="/treasureGenerator">
        {' '}
        <div className="tools">Treasure Generator</div>
      </Link>
      <Link to="/weatherGenerator">
        <div className="tools">Weather Generator </div>
      </Link>
      <Link to="/map">
        <div className="tools">Map</div>
      </Link>
    </nav>
  </div>
)

export default Navbar
