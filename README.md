# Welcome to gatsby-remark-pintora 👋

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/github/license/hikerpig/gatsby-remark-pintora)](#)

This plugin adds diagrams using [pintora](https://github.com/hikerpig/pintora) during server-side rendering. So you don't have to include a runtime dependency of pintora.

### 🏠 [Homepage](https://github.com/hikerpig/gatsby-remark-pintora)

## Install

In your gatsby project:

```sh
npm install --save gatsby-remark-pintora
```

## How to Use

This plugin processes markdown code blocks. If you have any other plugins which do that such as syntax highlighters, make sure you **import this before those plugins**.

Add the plugin to your gatsby-config.js.

```js
{
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-pintora',
            options: {
              // language: 'pintora',
              // theme: 'default',
              // backgroundColor: '#ffffff',
            }
          }
        ]
      }
    }
  ]
}
```

Now you can use pintora in your markdown:

```text
```pintora
activityDiagram
  start
  :Install Plugin;
  :Configure;
  :Make beautiful and structured diagrams;
  end
```

## Author

* Github: [@hikerpig](https://github.com/hikerpig)

## Acknowledge

This plugin is inspired by [gatsby-remark-mermaid | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-remark-mermaid/).

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
