export default {
  preset: 'vercel',
  routeRules: {
    '/**': { cache: false, prerender: false }
  }
}
