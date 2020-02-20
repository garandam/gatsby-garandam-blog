---
title: 100DaysOfGatsby - Challenge - Day 3
date: 2020-01-03T19:40:06.489Z
description: Gatsby - Challenge - Day 3
tags: ["gatsby", "challenge"]
---

### Progress of Day 3

On Day 3, I could finish the whole [tutorial](https://www.gatsbyjs.org/tutorial/) and finished Step 4 - 8.

I took out for me the essential key points.

### GraphQL

- Keep in mind that only **Pages** can make [Page Queries](https://www.gatsbyjs.org/tutorial/part-four/#use-a-page-query).
- Non-page components, such as **Layout**, can use [StaticQuery](https://www.gatsbyjs.org/tutorial/part-four/#use-a-staticquery).

What's also important in my opinion is that `Page queries` live outside of the component definition - by convention at the **end** of the page component file - and are only available on-page components.

### GraphQL - IDE

http://localhost:8000/___graphql

### GraphQL - Creating new pages has two steps

- 1. Generate the "path" or "slug" for the page.
- 2. Create the page (Query data with GraphQL, Map the query results to pages)

### GraphQL - Data

To create your markdown pages, you'll learn to use two Gatsby APIs within `gatsby-node.js`:

- `onCreateNode`
- and
- `createPages`

`!!! IMPORTANT !!!` These are two workhorse APIs you'll see used in many sites and plugins.

### Core Principles of Gatsby

One of the core principles of Gatsby is that creator need an immediate connection to what they're creating, see also [Video: Bret Victor - Inventing on Principle](https://vimeo.com/36579366)

This video gave me a new view into different aspects of how I can implement different thinks, thanks for that gem.

### GitHub Repo:

https://github.com/garandam/gatsby-tut-part-four
