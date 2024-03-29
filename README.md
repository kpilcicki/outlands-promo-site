
# Promotional website for the game Outlands



[Template Website](https://cara.lekoarts.de)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LeKoArts/gatsby-starter-portfolio-cara) [![Edit gatsby-starter-portfolio-cara](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/LeKoArts/gatsby-starter-portfolio-cara/tree/master/)

[![CircleCI](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-cara.svg?style=svg)](https://circleci.com/gh/LekoArts/gatsby-starter-portfolio-cara)

- TailwindCSS & styled-components
- React Spring
- Playful & Colorful One-Page website with Parallax effect

## Features

- [React Spring](https://github.com/drcmda/react-spring) (Used for Parallax effect)
- [TailwindCSS](https://tailwindcss.com/) & [styled-components](https://www.styled-components.com/) for styling
  - Use the full power of TailwindCSS while generating small styles (as unused data gets deleted)
  - Uses `tailwind.macro` (Babel macro) to have hot-reloading of Tailwind styles
- SEO
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
- [Typefaces](https://github.com/KyleAMathews/typefaces) for quicker font loading
- Offline Support
- WebApp Manifest Support
- Responsive images
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support

**Please note:** The parallax effect can be quite heavy for some older CPUs and the site uses some newer CSS features which will result in incompatibility with older browsers.

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

To copy and install this starter run this command (with "project-name" being the name of your folder you wish to install it in):

```
gatsby new project-name https://github.com/LekoArts/gatsby-starter-portfolio-cara
cd project-name
npm run dev
```

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/).

### Building your site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

## Configuration

You have multiple options to configure this project.

1. Use the `config/website.js` to configure data passed to the SEO component and other parts of the Gatsby site:

```JS
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Cara - Gatsby Starter Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Cara', // Alternative Site title for SEO
  siteTitleShort: 'Cara', // short_name for manifest
  siteUrl: 'https://cara.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.jpg', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
```

2. Use the `tailwind.js` file to configure TailwindCSS. Their [documentation](https://tailwindcss.com/docs/configuration) explains it step-by-step.

3. Modify the files in the `src/styles` directory.

4. Modify the sections in the `src/views` directory. They contain the Dividers & SVG icons.

5. You can also place the icons somewhere else on the page, modify their animation and hide them on smaller screens:

```JSX
  <SVG icon="triangle" hideMobile width={48} stroke={colors.orange} left="10%" top="20%" />
  <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
  <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
```

- For `icon`, you have the options: `triangle, circle, arrowUp, upDown, box, hexa`
- If you want the SVG to be hidden on mobile view, add `hideMobile` to the SVG component
- You can define the width via the TailwindCSS width [option](https://tailwindcss.com/docs/width)
- The colors get defined via the TailwindCSS color [option](https://tailwindcss.com/docs/colors)
  - Please note that you will either have to define the color in `stroke` **or** `fill` depending on the icon. For reference, have a look at the currently used SVGs
- The options `left` and `top` position the icon relatively to its parent container
- You can also wrap the SVGs with `<UpDown />` or `<UpDownWide />` to animate them

### Typography

Instead of relying on Google's CDN to host its fonts, this site self-hosts the fonts and therefore benefits from increased performance. The installed fonts can be found in `src/components/Layout.jsx`:

```JSX
import 'typeface-cantata-one';
import 'typeface-open-sans';
```

This starter uses [typefaces](https://github.com/KyleAMathews/typefaces) by Kyle Mathews. Have a look at the repository if you want to install & use other fonts.

You'll also need to configure `fonts` in `tailwind.js` to reflect the changes. You then can use the fonts with `font-sans` and `font-serif`.
