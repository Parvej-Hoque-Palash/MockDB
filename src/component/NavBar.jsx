import React from 'react'

const NavBar = () => {
  return (
    <div className="d-flex flex-column">
        <button class="rounded-pill btn btn-outline-primary text-white mb-1">Home</button>
        <button class="rounded-pill btn btn-outline-primary text-white mb-1">Inbox</button>
        <button class="rounded-pill btn btn-outline-primary text-white mb-1">Share</button>
        <button class="rounded-pill btn btn-outline-primary text-white mb-1">Settings</button>
        <button class="rounded-pill btn btn-outline-primary text-white mb-1">Contact</button>
    </div>
  )
}

export default NavBar