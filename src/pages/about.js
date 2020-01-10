import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <div className="w-full text-gray-800 text-center text-4xl font-extrabold underline py-4">
          About me
        </div>
        <div className="mt-8">
          <p className="mb-4">
            Hi, I’m Grischa Aranda Muñoz. I work as an IT-Consultant and
            Software Engineer living in Switzerland.
          </p>
          <p className="mb-4">This is my software development Blog.</p>
          <h3 className="text-xl my-3 font-semibold">
            Why does I write this Blog:
          </h3>
          <p className="mb-4">
            As a Consultant, I see different Companies and how they handle their
            problems and which are transformed into challenges, but in most
            cases, they make things more complex than they are. <br />
            So `Albert Einstein` says:
            <blockquote className="p-0 p-2 mx-6 bg-gray-100 mb-4 border-l-4 border-gray-400 italic">
              “If you can’t explain it simply, you don’t understand it well
              enough.”
            </blockquote>
            and that’s my goal `explain IT simple` between Customers and/or
            Developers to build perfect solutions.
          </p>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
