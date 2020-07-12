<template>
  <div>
    <div class="p-6 border-b-2">
      <img
        class="text-7xl xl:text-xxl font-monoton select-none h-16"
        :src="require('../../assets/img/d3notes.svg')"
        alt="D/NOTES"
      />
    </div>
    <div class="px-6 max-w-4xl mt-6 min-h-screen flex flex-col">
      <div :hidden="entries.length > 0">
        Fetching notes...
      </div>
      <a
        :title="`Click to continue reading: ${item.title}`"
        class="border-b border-dark-30 block pb-4 note"
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
      <div class="flex mt-20 mb-6 space-x-2 items-center">
        <a href="/" no-link class="text-sm font-bold hover:underline">
          D3Portillo
        </a>
        <div class="text-2xl font-bold">/</div>
        <a
          href="https://github.com/D3Portillo/D3portillo/wiki"
          no-link
          class="text-sm font-bold hover:underline"
        >
          Github Wiki
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getMetas } from "../../helpers"
import marked from "marked"
const title = `D3Portillo | Notes`
export default {
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
