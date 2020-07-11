<template>
  <div class="h-screen w-full">
    <div class="text-7xl xl:text-xxl font-monoton  px-4 sticky top-0">
      GOODIES
    </div>
    <iframe
      class="airtable-embed"
      src="https://airtable.com/embed/shrlgFaZJ2RTgjpXY?backgroundColor=gray"
      frameborder="0"
      width="100%"
      height="100%"
    />
  </div>
</template>

<script>
import { getMetas } from "../../helpers"
const title = `D3portillo | Goodies`
export default {
  head: {
    meta: getMetas({
      title,
      image: "/seo_goodies.png",
      description: "Slides & Presentations by me :)"
    }),
    title,
  },
}
</script>