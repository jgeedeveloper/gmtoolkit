import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
  <div>
    <h1>D&D 5e: GM TOOLKIT</h1>
    <nav>
      <div className="tools">Encounter Generator</div>
      <div className="tools">Treasure Generator</div>
      <Link to="/weather">
        <div className="tools">Weather Generator </div>
      </Link>
      <div className="tools">Map</div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
