import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} justify-content-between`}>
  <a className="navbar-brand mx-2">TExtBadlo.com</a>
  <a className="navbar-brand mx-1">Home</a>
  <a className="navbar-brand mx-1">About</a>
  <a className="navbar-brand mx-1">Contact</a>
  <a className="navbar-brand mx-1">Help</a>
    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
    <span className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label></span>
  {/* <span className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.rogglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label></span>
  <span className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.bogglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label></span> */}
</nav>
    </div>
  )
}
