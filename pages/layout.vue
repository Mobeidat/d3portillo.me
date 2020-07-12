<template>
  <div class="px-6 mx-auto max-w-5xl">
    <img src="/seo_note.png" hidden />
    <a title="Go to notes" no-link href="/notes">
      <img src="/d.png" alt="D/Note" class="h-24 shadow inline" />
    </a>
    <div class="mt-6">
      <style>
       pre{margin:1rem 0;border:solid 1px rgba(0,0,0,.1);background:transparent}pre code{display:block;overflow-x:auto;padding:0.5em;background:#ffffff;}pre code,.hljs-subst{color:#434f54;}.hljs-keyword,.hljs-attribute,.hljs-selector-tag,.hljs-doctag,.hljs-name{color:#00979d;}.hljs-built_in,.hljs-literal,.hljs-bullet,.hljs-code,.hljs-addition{color:#d35400;}.hljs-regexp,.hljs-symbol,.hljs-variable,.hljs-template-variable,.hljs-link,.hljs-selector-attr,.hljs-selector-pseudo{color:#00979d;}.hljs-type,.hljs-string,.hljs-selector-id,.hljs-selector-class,.hljs-quote,.hljs-template-tag,.hljs-deletion{color:#005c5f;}.hljs-title,.hljs-section{color:#880000;font-weight:bold;}.hljs-comment{color:rgba(149,165,166,0.8);}.hljs-meta-keyword{color:#728e00;}.hljs-meta{color:#434f54;}.hljs-emphasis{font-style:italic;}.hljs-strong{font-weight:bold;}.hljs-function{color:#728e00;}.hljs-number{color:#8a7b52;}
      </style>
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
