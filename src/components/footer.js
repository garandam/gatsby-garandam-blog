import React from "react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400">
      <div className="container flex max-w-4xl mx-auto py-8">
        <div className="text-gray-600 text-sm text-center w-full py-4">
          © {new Date().getFullYear()}, Created by Grischa Aranda Muñoz with
          {` `}
          <a className="underline" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
