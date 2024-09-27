/** @type {import('./types/ConfigType').Config} */

module.exports = {
  darkMode: true,
  search: {
    algolia_admin_key: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    algolia_app_id: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    algolia_search_api_key: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
    algolia_index: "dev_corndocs",
  },
  project: {
    name: "GatoDocs",
    url: "https://gatosports.com",
    github: {
      repo: "https://gatosports.com",
      usesMain: false,
    },
    logo: {
      src: "/static/logo.svg",
      alt: "CornDocs Logo",
      size: [80, 40],
    },
    mainScreen: {
      showSearch: true,
      showSelection: true,
      homePage: {
        custom: {
          path: "index",
        },
        title: "Explore Comprehensive Product Manuals and Guides",
        tagLine:
          "Get the Most Out of Your Gato sports Gear!",
      },
    },
  },
};
