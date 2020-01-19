import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Blog posts" />

        <div className="w-full text-gray-800 text-center text-4xl font-extrabold underline py-4">
          Blog
        </div>

        <div className="my-12">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                key={node.fields.slug}
                className="w-full bg-white rounded hover:bg-gray-200 focus:bg-gray-200 overflow-hidden shadow-lg mb-4"
              >
                <Link
                  to={`/blog${node.fields.slug}`}
                  className="no-underline hover:no-underline"
                >
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p
                      className="text-gray-700 text-base"
                      dangerouslySetInnerHTML={{
                        __html: node.excerpt,
                      }}
                    ></p>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      {node.frontmatter.tags.map(tag => {
                        return (
                          <Link
                            to={`/tags/${tag}`}
                            className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                          >
                            {tag}
                          </Link>
                        )
                      })}
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {node.frontmatter.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
