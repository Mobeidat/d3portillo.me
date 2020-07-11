import Template from "./Template.vue"

export default (context) => {
  const { setRootComponent, Vue } = context
  Vue.mixin({
    methods: {
      open: (URL) => {
        window.open(URL, "_blank")
      },
    },
  })
  setRootComponent(Template)
}
