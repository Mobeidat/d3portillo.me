<template>
  <div class="px-6 mx-auto max-w-5xl">
    <a title="Go to notes" no-link href="/notes">
      <img src="/d.png" alt="D/Note" class="h-24 shadow" />
    </a>
    <div v-html="content" class="mt-6"/>
  </div>
</template>
<script>
import marked from "marked"
export default {
  data() {
    return {
      content: "",
    }
  },
  mounted() {
    const url = `https://raw.githubusercontent.com/wiki/D3Portillo/D3Portillo/saber-simplemente-wow.md`
    fetch(url)
      .then((r) => r.text())
      .then((content) => {
        this.content = marked(content)
      })
  },
}
</script>
