module.exports = {
  skills: {
    JavaScript: 77,
    Dart: 44,
    "Power Ranger Red": 99.99,
    "Passion to code": 103,
  },
  footers: () => {
    const thingsToSay = [
      `Keep it going, you can`,
      `Forward, there's hope`,
      `Sit down..., Be humble!`,
    ]
    const ridx = Math.floor(Math.random() * thingsToSay.length)
    return thingsToSay[ridx]
  },
  showcase: [
    {
      url: "nodeschoolsm.io",
      title: "Nodeschool San Miguel",
      description:
        "Ones of the projects I love the most NodeschoolSM is a Tech Community I help organizing. It's located on El Salvador.",
      type: "Community",
      image:
        "https://secure.meetupstatic.com/photos/event/7/3/9/1/600_484169585.jpeg",
    },
    {
      url: "d3portillo.me/notes",
      title: "D3 Notes",
      description:
        "I try to write about any stuff I'm learning here. It's made using Github Wiki's",
      type: "Notes",
      image: "/seo_notes_clean.png",
    },
    {
      url: "codepen.io/D3Portillo",
      title: "My Codepen",
      description: "My codepen profile, the place I started coding on :)",
      type: "Codepen",
      image: "/showcase/codepen.png",
    },
    {
      url: "aprendejs.email",
      title: "AprendeJS",
      description:
        "Aprendé Javascript desde tu email con un contenido previamente preparado y curado.",
      type: "Course",
      image: "/showcase/aprendejs.png",
    },
    {
      url: "rapzodia.com",
      title: "RAPZODIA",
      description: "Evento online de Freestyle Rap. Lanzamiento este año :)",
      type: "Event",
      image: "/showcase/rapzodia.png",
    },
    {
      url: "iorika.com",
      title: "Iorika",
      description:
        "Un blog de desarrolladores para desarrolladores, se llama Iorika por mi gatito <3",
      type: "Blog",
      image: "/showcase/iorika.png",
    },
  ],
  bio: [
    `
    My name's Denny Portillo. I love Science and Technology and all stuff related
    to nowadays gadgets makes me go crazy. Since childhood I had been attracted
    to this techy-weirdy-nerdy like things. Dad and Mom say that they were always
    putting an eye on what I was doing because little me was trying to destroy any
    stuff he finds on his path maybe rying to understand how they function or just
    smashing 'em. While growing I've started to feel really passionate to code.`,
    `
    I'm currently part of the <a href="https://spotcloud.io" target="_blank">SPOT</a>
    team as the <em>Chief Web Officer</em> (Yaay, Web things simply Rock!), some of my hobbies are
    playing around with code, watching some anime things or playing videogames on spare time.
    I also like playing with lego things and Open Hardware.`,
  ],
  about: `
    👋 Hi, Denny here, I love coding with JavaScript.
    I'm always playing around with different <em>Web Things</em> or Legos.
    There's too much to learn, but there's time`,
}
