/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    //if (location.pathname === rootPath || location.pathname === blogPath) {
    // maybe add different Header
    //}

    return (
      <>
        <div className="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
          <Header siteTitle={title}></Header>
          <main className="flex-grow">
            <div className="container w-full md:max-w-3xl mx-auto pt-20">
              {children}
            </div>
          </main>
          <Footer></Footer>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
