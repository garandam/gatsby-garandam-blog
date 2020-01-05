import React from "react"

const Footer = () => {
  return (
    <footer class="bg-white border-t border-gray-400">
      <div class="container flex max-w-4xl mx-auto py-8">
        <div class="text-gray-600 text-sm text-center w-full py-4">
          © {new Date().getFullYear()}, Created by Grischa Aranda Muñoz with
          {` `}
          <a class="underline" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
