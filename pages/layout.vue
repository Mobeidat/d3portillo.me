<template>
  <div class="px-6 mx-auto max-w-5xl overflow-hidden">
    <img src="/seo_note.png" hidden />
    <a title="Go to notes" no-link href="/notes">
      <img src="/d.png" alt="D/Note" class="h-24 shadow inline" />
    </a>
    <div class="mt-6 note-container">
      [CONTENT]
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0if71HOyVjY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <notes-footer />
  </div>
</template>
<script>
import footer from "../components/NotesFooter"
export default {
  components: {
    "notes-footer": footer,
  },
}
</script>
