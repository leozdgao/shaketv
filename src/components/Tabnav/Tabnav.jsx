import React from 'react'
import { IndexLink, Link } from 'react-router'
import './tabnav.scss'

const Tabnav = props => {
  return (
    <nav className="tabnav">
      <IndexLink to="/" className="tabnav-item">精彩推荐</IndexLink>
      <Link to="/schedule" className="tabnav-item">节目单</Link>
      <Link to="/famous" className="tabnav-item">名人墙</Link>
    </nav>
  )
}

export default Tabnav
