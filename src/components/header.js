import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
