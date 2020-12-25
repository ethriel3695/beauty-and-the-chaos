module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `beauty and the chaos`,
        icon: `content/assets/img/logo.png`,
        short_name: `beautyAndTheChaos`,
        start_url: `/`,
        background_color: `#b3b3b3`,
        theme_color: `#b3b3b3`,
        display: `standalone`,
        scope: '/',
        crossOrigin: `use-credentials`,
        // theme_color_in_head: false
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: {
          family: `Cinzel Decorative`,
          variable: true,
          weights: [400, 700, 900],
        },
      },
    },
  ],
  siteMetadata: {
    title: `Beauty and the Chaos`,
    author: `Reuben Ellis`,
    description: `Beautry and the Chaos, family blog, kids, homeschool, teaching and a collection of what I've learned in our journey so far!`,
    greeting: ``,
    copyright: `Copyright © 2020 Beauty and the Chaos LLC`,
    loginDesc: '',
    isAuthApp: false,
    newsletterTitle: '',
    social: {
      facebook: 'https://www.facebook.com/Beauty-and-the-Chaos-323641234947391',
      twitter: '',
      instagram: '',
      github: 'https://www.github.com/ethriel3695/gatsby-theme-contentful',
      email: 'mailto:beautyandthechaos@gmail.com',
    },
    externalLinks: [{ label: '', link: '' }],
    hasNotifications: false,
    categories: [
      'react',
      'gatsby',
      'gatsbyjs',
      'themes',
      'web development',
      'contentful',
      'production',
      'tailwindcss',
      'storybook',
    ],
    hasCTA: false,
  },
};
