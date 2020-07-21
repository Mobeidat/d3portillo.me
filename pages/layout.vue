<template>
  <div class="px-6 mx-auto max-w-5xl overflow-hidden">
    <img src="/seo_note.png" hidden />
    <a title="Go to notes" no-link href="/notes">
      <img src="/d.png" alt="D/Note" class="h-24 shadow inline" />
    </a>
    <div class="mt-6 note-container">
      [CONTENT]
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
