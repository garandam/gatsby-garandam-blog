---
title: 100DaysOfGatsby - Challenge - Day 4
date: 2020-01-04T19:40:06.489Z
description: Gatsby - Challenge - Day 4
tags: ["gatsby", "challenge"]
---

### Progress of Day 4

### Steps to complete "Gatsby Challenge 1"

- Setup Github - Repository
- Create fresh Gatsby Project
- Build a working Skeleton Blog
- Deploy with Netlify

After all the different Tutorials to learn and dig into Gatsby the last few days, we want to build our blog from scratch with a Git CMS aka NetlifyCMS & with some basic styling with TailwindCSS.

After this Guide, I would say we completed the first "Gatsby Challenge 1"

Ok, then here we go.

### Setup GitHub Repository

- Setup Github - Repository (see other Blog-Post - coming soon)

### Create fresh Gatsby Project

```sh
$ gatsby new my-blog
$ cd my-blog
$ git remote add ...
$ git push -u origin master

// Open VS Code
$ code .
```

### Build a working Skeleton Blog

Steps I planned before I started what I want to do, to recap the tutorial:

- Remove unnecessary Components & Pictures ( `Image.js`, `gatsby-astronaut.png`)
- Install & Configure a few important Gatsby-Plugins `gatsby-config.js`
  - TailwindCSS
  - NetlifyCMS
  - MDX
- Extend all Sites/Pages with `React.Component`
- Add `createPages` & `onCreateNode` to `gatsby-node.js` as mdx queries
- Add a Template `blog-posts.js` & a Component `blog.js`
- Add `GraphQL queries` to all Pages
- Update Documentation `README.md`

#### First, we remove all unnecessary items we don't need.

Image Component & Stylings
See also what I did [here](https://github.com/garandam/gatsby-garandam-blog/commit/8d76b7d74b44e26ddacb7babf9ccd68208e0caeb)

### Include TailwindCSS

https://www.gatsbyjs.org/docs/tailwind-css/

```sh
$ npm install tailwindcss --save-dev
$ npx tailwind init
```

#### Choose Option 1: PostCSS

https://www.gatsbyjs.org/docs/tailwind-css/#option-1-postcss

Install the Gatsby PostCSS plugin gatsby-plugin-postcss.

```sh
npm install --save gatsby-plugin-postcss
```

Include the plugin in your `gatsby-config.js` file.

```js
plugins: [`gatsby-plugin-postcss`],
```

Configure PostCSS to use Tailwind

Create a `postcss.config.js` in your project’s root folder with the following contents.

```js
module.exports = () => ({
  plugins: [require("tailwindcss")],
})
```

### Include NetlifyCMS

https://www.netlifycms.org/docs/gatsby/

```sh
$ npm install --save netlify-cms-app gatsby-plugin-netlify-cms
```

#### Include MDX Support

I included MDX to work in a powerful environment. I was reading about it and thought it's a good idea to include it directly from the beginning. What I later figured out was that NetlifyCMS currently not supports `.mdx`-Files, but still, it's fine to use it.

#### Skeleton-Blog GithHub-Commit

Don't copy-paste everything there are some issues in, that I figured out along my journey, but you can see it as inspiration or a starting point:

Check commits from Jan 3, 2020, & Jan 4, 2020

- [GitHub Repo](https://github.com/garandam/gatsby-garandam-blog/commits/master)

### Add, Commit & Push everything to GitHub

For the next step we want to add everything to `GitHub` that we can do the next step and deploy with `Netlify`

```sh
$ git add .
// $ git commit -m "your commit message"
$ git commit -m "feat: my initial skeleton blog"
$ git push
```

### Deploy with Netlify

- Deploy with Netlify (see other Blog-Post - coming soon)
