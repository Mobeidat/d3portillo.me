<template>
  <main>
    <slot />
  </main>
</template>

<script>
import "./assets/style.css"
export default {
  head: {
    link: [
      {
        type: "image/png",
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
}
</script>
