<template>
  <div class="px-6 mx-auto max-w-5xl">
    <a title="Go to notes" no-link href="/notes">
      <img src="/d.png" alt="D/Note" class="h-24 shadow" />
    </a>
    [CONTENT]
    <div v-html="content" class="mt-6" />
  </div>
</template>
