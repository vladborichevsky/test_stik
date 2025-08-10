export default {
  ssr: true,
  head: {
    meta: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }]
  },
  devtools: {
    enabled: false
  },
  css: ['~/assets/main.scss'],
  components: true
}