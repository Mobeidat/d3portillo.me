<template>
  <div>
    <div class="min-h-screen flex flex-col font-poppins z-10  mb-40">
      <div class="min-h-screen flex flex-col">
        <div class="inset-0 absolute bg-white">
          <img
            class="absolute left-0 top-0"
            src="../assets/img/waves/top.svg"
            alt="top-wave"
          />
          <img
            class="absolute right-0 bottom-0"
            src="../assets/img/waves/bottom.svg"
            alt="bottom-wave"
          />
        </div>
        <nav
          id="navigation"
          class="items-center justify-end text-xs px-4 py-2 w-full fixed z-30 hidden xl:flex"
        >
          <img
            src="../assets/img/tob.png"
            alt="Think outside the box"
            class="absolute h-full top-0 left-0 mt-2 ml-3 tob opacity-0"
          />
          <div
            @click="goto('showcase')"
            class="m-1 px-3 py-2 rounded hover:bg-dark-05 hover:shadow cursor-pointer"
          >
            Showcase
          </div>
          <div
            @click="goto('bio')"
            class="m-1 px-3 py-2 rounded hover:bg-dark-05 hover:shadow cursor-pointer"
          >
            Bio & Skills
          </div>
          <div
            @click="goto('social')"
            class="m-1 px-3 py-2 rounded hover:bg-dark-05  hover:shadow cursor-pointer"
          >
            Social
          </div>
          <div
            @click="goto('contact')"
            class="m-1 px-6 font-bold py-2 rounded bg-dark-full text-white hover:shadow cursor-pointer"
          >
            Contact
          </div>
        </nav>
        <main
          class="p-8 flex-wrap-reverse flex items-center xl:items-end justify-center pb-0 flex-grow xl:flex-wrap"
        >
          <img
            class="w-full xl:w-auto max-w-xl"
            src="../assets/img/me.svg"
            alt="it's me"
          />
          <div
            style="text-shadow: -1px -1px white"
            class="flex-grow text-lg sm:text-2xl xl:text-3xl max-w-xl text-center mt-40 xl:mt-0 p-2 xl:p-12 mb-8 quote"
          >
            <img src="../assets/img/quote-l.svg" alt="'" side="l" />
            <span v-html="siteData.about" />
            <img src="../assets/img/quote-r.svg" alt="'" />
          </div>
        </main>
      </div>
      <main class="p-8 pb-0 bg-white cursor-default mb-8">
        <section id="showcase" class="px-4 xl:px-12 py-12 p-12 pb-0 mb-10">
          <div
            style="line-height: .72"
            class="text-7xl xl:text-xxl font-monoton break-all mb-20"
          >
            SHOWCASE
          </div>
          <div class="flex flex-wrap">
            <div
              v-for="item in siteData.showcase"
              class="w-full xl:w-1/3 p-2 max-w-lg"
              :key="item.title"
            >
              <div class="shadow-inner h-56 flex items-end">
                <img
                  class="object-cover w-full h-full absolute pb-10 rounded"
                  :src="item.image"
                  :alt="item.title"
                />
                <div class="bg-dark-60 inset-0 absolute rounded"></div>
                <div
                  @click="open(`https://${item.url}`)"
                  class="absolute inset-0 p-8 pb-4 opacity-0 hover:opacity-100 cursor-pointer"
                  style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.63) 61.98%, rgba(0, 0, 0, 0.6) 100%);"
                >
                  <div
                    style="min-height: 2.5rem"
                    class="text-white uppercase text-center text-2xl font-bold leading-none mb-2"
                  >
                    {{ item.title }}
                  </div>
                  <p class="text-white opacity-75 text-center text-sm">
                    {{ item.description }}
                  </p>
                </div>
                <nav
                  class="flex items-center justify-end bg-dark-full py-2 pl-4 pr-2 w-full"
                >
                  <div
                    class="flex-grow text-white text-xs h-6 flex items-center"
                  >
                    <div>
                      <span class="hidden sm:inline">
                        Visit {{ item.type }}:</span
                      >
                      <a :href="`http://${item.url}`">{{ item.url }}</a>
                    </div>
                  </div>
                  <div class="actions flex items-center text-white">
                    <a
                      no-link
                      :href="
                        `mailto:hello@d3portillo.me?subject=Hi, nice day, love your *${item.type} project&body=Hey Denny I found out your ${item.type}: ${item.title} on https://d3portillo.me, wondering if... `
                      "
                      class="h-6 px-1"
                    >
                      <img
                        title="Send Denny a comment about this"
                        src="../assets/img/comment.svg"
                        class="h-full cursor-pointer"
                        alt="Comment"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section id="bio" class="px-4 xl:px-12 py-12 p-12 max-w-4xl">
          <div class="text-7xl xl:text-xxl font-monoton">
            BIO
          </div>
          <p
            v-for="piece in siteData.bio"
            v-html="piece"
            :key="piece"
            class="text-lg my-2"
          />
          <div class="text-7xl xl:text-xxl font-monoton mt-10">
            SKILLS
          </div>
          <div
            class="skillbar"
            v-for="(value, skill) in siteData.skills"
            :key="skill"
          >
            <div
              class="progress text-sm sm:text-base"
              :style="`width: ${value}%`"
            >
              <span>{{ skill }}</span>
              <span>{{ value }}%</span>
            </div>
          </div>
          <p class="text-dark-60 text-xs">
            Psst, Skill metrics are not a thing on this decade. I can stand up
            any problem life puts on my way :)
          </p>
        </section>
        <div class="bg-dark-30 -mx-8 px-8">
          <section id="social" class="px-4 xl:px-12 py-12 max-w-4xl">
            <div
              class="text-7xl xl:text-xxl font-monoton text-white opacity-50 mb-4"
            >
              SOCIAL
            </div>
            <div class="flex w-full flex-col items-end max-w-xs xl:max-w-full">
              <div
                class="card bg-white rounded-t h-40 xl:h-48 xl:p-4 w-full rounded sm:shadow flex flex-col xl:flex-row"
              >
                <img
                  @click="preview"
                  :title="
                    spotify.preview
                      ? 'Click to preview'
                      : 'No preview available'
                  "
                  :src="spotify.cover"
                  :class="[
                    'shadow hover:shadow-outline object-cover rounded-t xl:rounded-t-none ',
                    spotify.preview && 'previews cursor-pointer',
                  ]"
                  :alt="`Cover for ${spotify.name}`"
                  style="height: 140%"
                />
                <div
                  class="flex flex-col flex-grow px-6 py-6 xl:py-2 bg-white xl:bg-transparent"
                >
                  <div
                    class="text-xl xl:text-4xl flex leading-tight mb-1 items-end flex-grow"
                  >
                    {{ spotify.name }}
                  </div>
                  <div class="text-sm xl:text-xl text-dark-40">
                    {{ spotify.artists }}
                  </div>
                  <div
                    class="leading-none"
                    style="font-size: 8px; opacity: .22"
                  >
                    You can preview the song on cover.
                  </div>
                  <div
                    class="flex justify-end h-12 xl:-mr-4 mt-2 xl:-mt-1 flex-grow items-end"
                  >
                    <a no-link :href="spotify.url">
                      <audio id="preview" :src="spotify.preview"></audio>
                      <img
                        class="h-10 xl:h-12 hover:scale rounded-sm xl:shadow hover:shadow-lg"
                        src="../assets/img/playonspotify.svg"
                        alt=" > "
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="flex w-2/3 text-4xl font-black text-white mr-2 opacity-0 xl:opacity-100"
              >
                MY MOOD
              </div>
            </div>
          </section>
          <div class="bg-cyan mt-40 p-8 lg:p-12 rounded z-10">
            <div class="text-2xl xl:text-7xl font-black text-center pb-12">
              DOWNLOADABLES
            </div>
            <div
              class="flex justify-between items-center pb-6 flex-wrap xl:flex-no-wrap"
            >
              <div class="w-full sm:w-1/3 flex justify-center px-1">
                <div
                  @click="open('https://d3portillo.me/')"
                  class="bg-white shadow rounded cursor-pointer hover:shadow-lg"
                >
                  <img
                    src="../assets/downloadables/vitae.svg"
                    alt="My CV"
                    class="m-2 h-40"
                  />
                </div>
              </div>
              <div class="w-full sm:w-1/3 flex justify-center mt-6 px-1 sm:m-0">
                <a
                  no-link
                  href="/cards/d3portillo.tar"
                  class="bg-white shadow rounded cursor-pointer hover:shadow-lg"
                >
                  <img
                    src="../assets/downloadables/presentation.svg"
                    alt="Presentation card"
                    class="m-2 h-40"
                  />
                </a>
              </div>
              <div class="w-full sm:w-1/3 flex justify-center mt-6 px-1 sm:m-0">
                <a
                  no-link
                  target="_blank"
                  href="/goodies"
                  class="bg-white shadow rounded cursor-pointer hover:shadow-lg"
                >
                  <img
                    src="../assets/downloadables/freebies.svg"
                    alt="Freebies"
                    class="m-2 h-40"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            id="contact"
            class="bg-dark-90 flex justify-center items-center flex-col pb-20 pt-32 -mx-8 -mt-8"
          >
            <div class="text-2xl xl:text-7xl font-black text-white text-center">
              LEAVE ME A MESSAGE
            </div>
            <section class="p-12 max-w-xl w-full">
              <form
                class="flex flex-col mailer"
                method="POST"
                name="contact"
                netlify
              >
                <input name="form-name" value="contact" type="hidden" />
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Your name"
                  class="font-sans bg-dark-05 border-b-2 text-white mb-2 p-2 text-lg"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your email"
                  class="font-sans bg-dark-05 border-b-2 text-white mb-2 p-2 text-lg"
                />
                <textarea
                  required
                  rows="3"
                  name="message"
                  type="text"
                  placeholder="Hi Denny, it's Jhon, lets grab a coffee and so we can talk about a project."
                  class="font-sans bg-dark-05 border-b-2 text-white mb-2 p-2 text-lg"
                />
                <button
                  type="submit"
                  class="mt-4 cursor-pointer bg-yellow hover:shadow-outline font-bold text-lg xl:text-2xl px-6 py-3 flex items-center justify-center"
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
    <footer
      class="flex items-center justify-center p-8 fixed bottom-0 left-0 w-full h-40 pt-0"
    >
      <div class="opacity-50">
        {{ siteData.footers() }}
      </div>
      <img src="../assets/img/D.7.svg" alt="D.7" />
    </footer>
  </div>
</template>

<script>
import { getMetas } from "../helpers"
import siteData from "../page-data/index"
const title = `Denny Portillo | D3Portillo`
export default {
  head: {
    meta: getMetas({ title }),
    title,
  },
  data() {
    return {
      siteData,
      spotify: {
        name: "Don't Speak (I Came To Make A Bang!)",
        artists: "Eagles Of Death Metal",
        cover:
          "https://i.scdn.co/image/ab67616d0000b273802b717833a46a229498897d",
        url: "#",
        preview:
          "https://p.scdn.co/mp3-preview/ebdd6082c79706023e0c23097e0cf1e733503ce4?cid=774b29d4f13844c495f206cafdad9c86",
      },
    }
  },
  methods: {
    goto(e) {
      const $item = window[e]
      if ($item) {
        $item.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    },
    fetchData() {
      fetch("/.netlify/functions/data")
        .then((r) => r.json())
        .then((data) => {
          this.spotify = data
        })
    },
    preview() {
      if (!this.spotify.preview) return
      const audio = window.preview
      audio.play()
    },
  },
  mounted() {
    window.onscroll = (e) => {
      const { scrollY = 0 } = window
      if (scrollY < 1000) {
        const $nav = window.navigation
        if (scrollY > 50) {
          $nav.classList.add("bg-white")
          $nav.classList.add("shadow")
        } else {
          $nav.classList.remove("bg-white")
          $nav.classList.remove("shadow")
        }
      }
    }
    window.onload = () => {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    this.fetchData()
  },
}
</script>
