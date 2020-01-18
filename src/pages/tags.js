import React from "react"

import { Link, graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"

class TagsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const tagGroup = data.allMdx.group

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All Tags" />

        <div className="w-full text-gray-800 text-center text-4xl font-extrabold underline py-4">
          Tags
        </div>

        <div className="my-12">
          <ul>
            {tagGroup.map(tagEntry => (
              <li key={tagEntry.tag}>
                <Link to={`/tags/${kebabCase(tagEntry.tag)}/`}>
                  {tagEntry.tag} ({tagEntry.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 1000) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
