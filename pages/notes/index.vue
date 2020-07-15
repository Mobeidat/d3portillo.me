<template>
  <div>
    <div class="p-6 max-w-5xl mx-auto">
      <img
        class="text-7xl xl:text-xxl font-monoton select-none h-16"
        :src="require('../../assets/img/d3notes.svg')"
        alt="D/NOTES"
      />
    </div>
    <div class="border-b-2" />
    <div class="px-6 max-w-5xl mx-auto mt-12 min-h-screen flex flex-col">
      <p class="mb-6 text-xs text-dark-85">
        👋 Estas son notas que hago y comparto con ustedes y <b>NO</b>, no es un
        <b>Blog</b>. <br />Lo que postearé puede tener errores ortograficos.
        Aveces puede ser contenido en inglés o español. Si no estás de acuerdo
        con el término, disculpas.
      </p>
      <b class="text-4xl">
        📓 NOTAS
      </b>
      <div :hidden="entries.length > 0">
        Fetching notes...
      </div>
      <a
        :title="`Click to continue reading: ${item.title}`"
        class="border-b border-dark-30 block pb-4 note mt-4"
        no-link
        :href="`https://d3portillo.me/notes/${item.slug}`"
        v-for="item in entries"
        :key="item.title"
      >
        <h1 class="text-2xl uppercase font-bold">{{ item.title }}</h1>
        <p>
          {{ item.resume }}
        </p>
      </a>
      <div class="flex-grow" />

      <notes-footer />
    </div>
  </div>
</template>

<script>
import footer from "../../components/NotesFooter"
import { getMetas } from "../../helpers"
import marked from "marked"
const title = `D3Portillo | Notes`
export default {
  components: {
    "notes-footer": footer,
  },
  head: {
    meta: getMetas({
      title,
      image: "/seo_notes.png",
      description:
        "Notas que hago de cosas que me gustan. A veces me dan ganas de hacerlas en Español e Inglés",
    }),
    title,
  },
  data() {
    return {
      entries: [],
    }
  },
  mounted() {
    const baseURL = `https://raw.githubusercontent.com/wiki/D3Portillo/d3portillo.me`
    fetch(baseURL + "/Home.md")
      .then((r) => r.text())
      .then((text) => {
        text.match(/(- ).+\n/g).forEach((item) => {
          const slug = item.split("/").pop()
          const itemURL = `${baseURL}/${slug.trim()}.md`
          fetch(itemURL)
            .then((r) => r.text())
            .then((content) => {
              const [title, resume] = content.split("\n\n")
              this.entries = [
                ...this.entries,
                { title: title.replace("#", ""), resume, slug },
              ]
            })
        })
      })
  },
}
</script>
