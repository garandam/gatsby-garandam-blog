import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Created by Grischa Aranda Muñoz with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
