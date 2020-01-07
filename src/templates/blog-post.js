import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <div>
          <Link to="/blog/" className="text-base text-teal-500 font-bold">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-black pt-6 pb-2 break-normal">
            {post.frontmatter.title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-500">
            {post.frontmatter.date}
          </p>
        </div>

        <div className="markdown">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <hr className="border-b-2 border-gray-300 mb-8 mx-4" />

        <div className="flex justify-between px-4 pb-12 text-teal-500 font-bold text-sm">
          <div>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
