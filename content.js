// Edit this file to update the website. Saving it will refresh Live Server.
const SITE_CONTENT = {
  profile: {
    name: "Zhuojun Jiang",
    initials: "ZJ",
    location: "Tempe, Arizona",
    bio: {
      intro: "I’m a third-year Computer Science PhD student at",
      university: {
        label: "Arizona State University",
      },
      advisor: {
        label: "Dr. Chris Bryan",
        url: "https://chrisbryan.github.io/",
      },
      lab: {
        label: "Sonoran Visualization Laboratory🌵",
      },
      research:
        "My research explores how people perceive, create, and reason with data visualizations, and how AI reshapes these processes. I’m particularly interested in human judgment and creative control in human-AI collaboration. My current work includes visual perception and accessibility, LLM-supported data storytelling, and visualization authoring.",
      background:
        "My background in industrial and mechanical engineering, with a focus on ergonomics and HCI, informs my approach to understanding people and designing tools that support their thinking and creativity.",
    },
    email: "zjian115@asu.edu",
    cv: "assets/pdf/Academic_CV.pdf",
    image: "assets/avatar/zhuojun.png",
  },

  links: [
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=SpWGkEIAAAAJ&hl=en&oi=ao",
      icon: "assets/logo/icon-scholar.png",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/zhuojun-jiang-394127294/?isSelfProfile=true",
      icon: "assets/logo/icon-linkedin.png",
    },
    {
      label: "Gmail",
      url: "mailto:zjian115@asu.edu",
      icon: "assets/logo/icon-gmail.png",
    },
  ],

  interests: [
    {
      title: "Data Visualization",
      description:
        "Designing visual representations that make complex data easier to explore and understand.",
    },
    {
      title: "Human–Computer Interaction",
      description:
        "Studying how people perceive, use, and collaborate through interactive computing systems.",
    },
    {
      title: "Accessible Visual Computing",
      description:
        "Creating inclusive visual experiences that work across different abilities and contexts.",
    },
  ],

  // Optional media for each publication:
  // media: { type: "teaser", src: "assets/publications/teaser.png", alt: "...", url: "" }
  // media: { type: "video", src: "assets/publications/video.mp4", poster: "assets/publications/poster.png" }
  // media: { type: "slides", src: "assets/publications/slides-cover.png", alt: "...", url: "https://..." }
  publications: [
    {
      year: "2026",
      title:
        "Harnessing LLMs Without Surrendering Control: Delegation Boundaries in Visual Data Storytelling Authoring",
      authors: ["Zhuojun Jiang", "Yuki Ueno", "Chris Bryan"],
      venue: "IEEE VIS",
      location: "Boston, MA, USA",
      media: {
        type: "teaser",
        src: "assets/research/26_Storytelling.png",
        alt: "Delegation boundaries between LLM execution and human control in visual data storytelling",
      },
      abstract:
        'Despite the emergence of large language models (LLMs) for visual data storytelling workflows, there are open questions about how authors decide what activities or tasks to entrust to them and what should be "protected" or maintained under human control. To investigate this, we interviewed a cohort of 12 expert visual data storytellers. Our analysis shows that participants rarely treated LLMs as autonomous storytellers. Instead, they tend to selectively delegate execution-oriented tasks to LLMs while retaining control over activities that shape narrative intent and story meaning. Our findings show that LLM assistance is most productive after human seeding and constraint-setting, and that it shifts labor from production to verification. We discuss design implications for boundary-aware authoring tools, data-grounded generation, low-fidelity ideation, and reporting practices for LLM-based visualization research.',
      links: [
        { label: "PDF", url: "https://arxiv.org/pdf/2609.25700" },
        {
          label: "Publisher",
          url: "https://rdp.ieeevis.org/year/2026/program/paper/d8023d9f-4d7e-4873-97c1-de94c9fabc92/",
        },
      ],
    },
    {
      year: "2026",
      title:
        "VisCanvas: A Node-based Interface for Exploratory Visualization Authoring with LLMs",
      authors: ["Yuki Ueno", "Bretho Danzy", "Zhuojun Jiang", "Chris Bryan"],
      venue: "IEEE VIS",
      location: "Boston, MA, USA",
      media: {
        type: "teaser",
        src: "assets/research/26_VisCanvas.png",
        alt: "VisCanvas node-based interface for exploratory visualization authoring",
      },
      abstract:
        "Visual data analysis involves both open-ended exploration and targeted question answering. Visualization authoring tools support this process by enabling users to create visualizations for these tasks. With the rise of large language models, substantial effort has been devoted to developing visualization authoring tools that use natural language instructions. However, existing systems are typically based on a linear chat interface, which is not well suited to exploratory visual analysis workflows. We introduce VisCanvas, a node-based interface for exploratory visualization authoring with LLMs. VisCanvas allows users to create, revise, branch, and merge visualizations in a non-linear way, enabling more efficient exploration of multiple analytical directions. A user study with 20 participants shows that VisCanvas facilitates more diverse data interaction while maintaining performance levels in cognitive load and usability that are indistinguishable from current prevailing methods.",
      links: [
        { label: "PDF", url: "https://arxiv.org/pdf/2607.21886" },
        {
          label: "Publisher",
          url: "https://www.ieeevis.org/year/2026/program/paper/271df69a-ce73-4d46-bfa0-e1520dd5a6ca/",
        },
      ],
    },
    {
      year: "2025",
      title:
        "The Hue-Man Factor: An Empirical Evaluation of Visualization Perception and Accessibility Across Color Vision Profiles",
      homeLinkLabel: "DOI",
      authors: ["Zhuojun Jiang", "Anjana Arunkumar", "Chris Bryan"],
      venue: "IEEE VIS",
      location: "Vienna, Austria",
      media: {
        type: "teaser",
        src: "assets/research/25_Hue-man.png",
        alt: "Five accessibility challenges across color vision profiles",
      },
      abstract:
        "Color is a powerful tool in data visualization, but for individuals with color vision deficiencies (CVD), hue can become a barrier rather than an aid. Factor analysis reveals two dominant perceptual dimensions: functional utility and affective experience. While normal vision participants prioritize functional clarity, CVD users rely more on structural cues and emotional resonance, particularly when color is unreliable. Qualitative insights show that perceptual breakdowns occur not only in high-interference charts but also when redundant encoding or layout scaffolding is missing. We synthesize these findings and offer empirically grounded design recommendations to guide inclusive visualization practices. Our results argue that accessibility must go beyond color correction, embracing structural clarity, redundancy, and real-user validation to ensure inclusive visual communication.",
      links: [
        {
          label: "PDF",
          url: "https://chrisbryan.github.io/assets/pdf/jiang2026hueman.pdf",
        },
        {
          label: "DOI",
          url: "https://doi.org/10.1109/TVCG.2025.3634261",
        },
      ],
    },
    {
      year: "2025",
      title:
        "The Story of Wagyu: Bringing Charm of Japan’s Pride to the World",
      authors: [
        "Yuki Ueno",
        "Zhuojun Jiang",
        "Bretho Danzy",
        "Michael Kintscher",
        "Nianwen Dan",
        "Utkarsh Singh",
        "Chris Bryan",
      ],
      venue: "IEEE PacificVis",
      track: "Visual Storytelling Contest",
      trackUrl: "https://visstory.github.io/2025/",
      location: "Taipei, Taiwan",
      media: {
        type: "teaser",
        src: "assets/research/25_Wagyu.png",
        alt: "The Story of Wagyu illustrated title page with Mount Fuji and cattle",
      },
      award: "🏆 Honorable Mention",
      abstract:
        "This interactive visual data story introduces Wagyu through its four Japanese cattle breeds, more than 320 regional brands, export growth, grading systems, and cultural significance. Combining interactive maps, charts, illustrations, and a personal narrative centered on Kobe beef, the story explains what distinguishes Wagyu and how Japan’s regional production traditions have reached a global audience.",
      links: [
        {
          label: "Data Story",
          url: "https://y0uk1.github.io/PacificVis2025/",
        },
        {
          label: "Video",
          url: "https://www.youtube.com/watch?v=yQjwSWizEP4",
        },
      ],
    },
    {
      year: "2023",
      title:
        "Face Recognition in Self-Other Discrimination Task: Effects of Familiarity and Mask Wearing",
      authors: [
        "Zhuojun Jiang",
        "Suguru Yorioka",
        "Chika Yajima",
        "Takao Fukui",
      ],
      venue: "Proceedings of the Japanese Society for Cognitive Psychology",
      location: "Hachioji, Tokyo, Japan",
      media: {
        type: "teaser",
        src: "assets/research/23_Discrimination.png",
        alt: "Self-other face discrimination experiment with familiarity and mask-wearing conditions",
      },
      abstract:
        "This study examined how familiarity and mask wearing affect self-other judgments in face recognition. Participants completed four experimental sessions using morphed images that combined their own face with either a friend’s or an unfamiliar person’s face, with and without masks. Fifteen morphing levels were used to estimate the point at which self-other judgments reached chance level. The threshold tended to be lower for self-friend morphs than for self-unknown morphs, suggesting that familiarity may influence how facial representations of the self and others overlap.",
      links: [
        {
          label: "PDF",
          url: "https://www.jstage.jst.go.jp/article/cogpsy/2023/0/2023_2/_pdf/-char/ja",
        },
        {
          label: "DOI",
          url: "https://doi.org/10.14875/cogpsy.2023.0_2",
        },
      ],
    },
  ],

  skills: {
    languages: ["English", "Chinese", "Japanese"],
    technical: [
      { category: "Programming Languages", items: ["Python", "MATLAB", "R"] },
      { category: "Web & Visualization", items: ["HTML", "CSS", "JavaScript", "D3.js"] },
      { category: "Tools", items: ["Tobii", "Maya"] },
      {
        category: "Metalworking",
        items: ["machining", "welding", "casting", "heat treatment", "machine tool operation"],
        strikethrough: true,
        note: "🔨 Those might be a little rusty now.",
      },
    ],
  },

  // Edit project descriptions and optional detail links here.
  projects: [
    {
      title: "Swimming Digital Modeling",
      gallery: Array.from({ length: 28 }, (_, i) =>
        `assets/projects/swimming/swimming-slide-images.${String(i + 1).padStart(3, "0")}.jpeg`,
      ),
      description:
        "A Maya-based model of triathlon swimming using a real swimmer’s 3D scan. The project combines skeletal rigging, skin-weight refinement, and Ziva muscle simulation to explore realistic arm movement.",
      tags: ["3D Modeling", "Computer Graphics", "Sports Science"],
      url: "https://drive.google.com/file/d/1MD08-uaqF0j472QVkEYyfeef6J9eHPyb/view",
      linkLabel: "Slides",
    },
    {
      title: "レビューから中国と中華料理の判別",
      gallery: Array.from({ length: 15 }, (_, i) =>
        `assets/projects/cuisine/cuisine-slide-images.${String(i + 1).padStart(3, "0")}.jpeg`,
      ),
      description:
        "An NLP project investigating how restaurant reviews can distinguish authentic Chinese cuisine from Japanese-style Chinese cuisine.",
      tags: ["NLP", "Big Data"],
      url: "https://drive.google.com/file/d/1CjaSpa1TtyLLKcTrCj_-Xi18QdBkJMUv/view",
      linkLabel: "Slides",
    },
    {
      title: "Ark Angel",
      image: "assets/projects/ark-angel/04.jpg",
      imageAlt: "Ark Angel storyboard showing a child-safety warning scenario",
      gallery: Array.from({ length: 10 }, (_, i) =>
        `assets/projects/ark-angel/${String(i + 1).padStart(2, "0")}.jpg`,
      ),
      description:
        "A safety-monitoring concept for infants and young children, developed through real-world needs research, scenario storyboards, and prototype design.",
      tags: ["HCI", "Product Design", "Prototyping"],
      url: "https://drive.google.com/drive/folders/1jl5I1ezkUC0hGzkWKxcEZSyNx2qR1cnY",
      linkLabel: "Materials",
    },
    {
      title: "応用人間工学 Applied Ergonomics",
      image: "assets/projects/applied-ergonomics/01.jpg",
      imageAlt: "Applied ergonomics experiment on visual function and reaction time",
      gallery: Array.from({ length: 4 }, (_, i) =>
        `assets/projects/applied-ergonomics/${String(i + 1).padStart(2, "0")}.jpg`,
      ),
      description:
        "Practical experiments from an advanced applied ergonomics course, exploring human perception through vision, hearing, touch, and other sensory modalities.",
      tags: ["Ergonomics", "Experiments", "Human Perception"],
      url: "https://drive.google.com/drive/folders/1NLo3TVYafj0fzKfy8KBAw7Rp-OkTriW5",
      linkLabel: "Materials",
    },
  ],

  news: [
    {
      date: "Jul 17, 2026",
      text: "Two papers accepted to IEEE VIS 2026. See you in Boston! 🍩 🎉",
      papers: [
        {
          authors: ["Zhuojun Jiang", "Yuki Ueno", "Chris Bryan"],
          title:
            "Harnessing LLMs Without Surrendering Control: Delegation Boundaries in Visual Data Storytelling Authoring",
        },
        {
          authors: [
            "Yuki Ueno",
            "Bretho Danzy",
            "Zhuojun Jiang",
            "Chris Bryan",
          ],
          title:
            "VisCanvas: A Node-based Interface for Exploratory Visualization Authoring with LLMs",
        },
      ],
    },
    {
      date: "Jul 13, 2026",
      text: "Global Disney quest complete! Paris was the final stop.",
      image: "assets/news/news_disney2.png",
      imageAlt: "Hand-drawn Disney castle with fireworks",
      imageBefore: "Global Disney quest complete!",
    },
    {
      date: "Nov 9, 2025",
      text: "Had an amazing time✨ presenting 'The Hue-Man Factor' and connecting with the community at IEEE VIS 2025 in Vienna🇦🇹!",
    },
  ],

  academicService: [
    {
      role: "Reviewer",
      organizations: ["VIS", "EuroVis", "CHI", "CSCW", "VRST", "CogSci", "TVCG"],
    },
    {
      role: "Student Volunteer",
      organizations: ["Japanese Society for Cognitive Psychology Conference (JSCP)"],
    },
  ],

  // Add captions in text, and photo/video paths in media[].src.
  // Images: { type: "image", src: "assets/life/photo.jpg", alt: "Description" }
  // Videos: { type: "video", src: "assets/life/video.mp4", poster: "assets/life/cover.jpg" }
  // Drive videos: { type: "drive", src: "https://drive.google.com/file/d/FILE_ID/preview" }
  // Add more media entries for left/right navigation. Empty src keeps a placeholder.
  life: [
    {
      title: "PacificVis 2025",
      text: "",
      date: "2025",
      location: "Taipei, Taiwan",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/11Qt9qPGchGSVbuBfgerrUe5AsPlibu8g/preview",
          alt: "PacificVis 2025 conference photo",
        },
      ],
    },
    {
      title: "IEEE VIS 2025",
      text: "",
      date: "2025",
      location: "Vienna, Austria",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1VCKTcyuLtXVA11jQxbqEVBKxxSy-WUvX/preview",
          alt: "IEEE VIS 2025 conference photo",
        },
      ],
    },
    {
      title: "IEEE VIS 2026",
      text: "",
      date: "2026",
      location: "Boston, MA, USA",
      media: [{ type: "image", src: "", alt: "IEEE VIS 2026 conference photo" }],
    },
    {
      title: "Snowboarding",
      text: "",
      date: "2023",
      location: "Ishiuchi Maruyama · 石打丸山スキー場",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1wlFmaZCM1QhwxoteFYBiOnuvN8mT9P02/preview",
          alt: "Snowboarding at Ishiuchi Maruyama in 2023",
        },
      ],
    },
    {
      title: "Snowboarding",
      text: "",
      date: "2024",
      location: "Kagura · かぐらスキー場",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1Tn058t5t5SEadaQ_gEYFMIJD0Zgor3Fl/preview",
          alt: "Snowboarding at Kagura in 2024",
        },
      ],
    },
    {
      title: "Snowboarding",
      text: "",
      date: "2025",
      location: "Snowbowl",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1uQ6QRgM3E5vozuacVZiN-jBcNmX3sieV/preview",
          alt: "Snowboarding at Snowbowl in 2025",
        },
      ],
    },
    {
      title: "Freediving",
      text: "",
      date: "2022",
      location: "Manazuru, Kanagawa",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1Dg0Bx8kWGySHV-i_P_dw34IHPu6Ygi-z/preview",
          alt: "Freediving video 1",
        },
      ],
    },
    {
      title: "Freediving",
      text: "",
      date: "2022",
      location: "Manazuru, Kanagawa",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1wGLJG_ox4UtWIm2nVxMeJ3_5mrhExPXt/preview",
          alt: "Freediving video 2",
        },
      ],
    },
    {
      title: "Mermaiding",
      text: "",
      date: "2025",
      location: "Sincere Sea Star Aquarium, Chongqing",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1L5rTAFU7KQ1O_WY8WikOtgn9PckMq-I7/preview",
          alt: "Mermaid video",
        },
      ],
    },
    {
      title: "My First Overnight Climb of Mt. Fuji",
      text: "Lucky enough to catch the sunrise (御来光)",
      date: "2021",
      location: "Subashiri Trail",
      media: [
        { type: "image", src: "assets/life/mount-fuji/overnight-climb.jpg", alt: "Overnight climb of Mount Fuji" },
      ],
    },
    {
      title: "Mount Fuji",
      text: "I've summited Mount Fuji 🗻 twice.",
      date: "2021 & 2022",
      location: "",
      media: [
        { type: "image", src: "assets/life/mount-fuji/01.jpg", alt: "Mount Fuji climbing memory, photo 1" },
        { type: "image", src: "assets/life/mount-fuji/02.jpg", alt: "Mount Fuji climbing memory, photo 2" },
      ],
    },
    {
      title: "御来光、お久しぶり",
      text: "Same mountain, new trail, another sunrise",
      date: "2022",
      location: "Fujinomiya Trail",
      media: [
        { type: "image", src: "assets/life/mount-fuji/goraiko.jpg", alt: "御来光 — sunrise at Mount Fuji" },
      ],
    },
    {
      title: "Tokyo Sunset",
      text: "A sunset observed at 🗼 in Japan",
      date: "2021",
      location: "Tokyo Tower",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1MKLo8GFI9TfM7DSzVVGHImGNLZ0MBKOf/preview",
          alt: "A sunset observed at Tokyo Tower in Japan",
        },
      ],
    },
    {
      title: "Fireworks by the Sea",
      text: "My first fireworks festival by the sea",
      date: "2022",
      location: "Atami, Japan",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1mXRf-KUGP9pGdvMYP2sjtY_dsv8KS5mJ/preview",
          alt: "My first seaside fireworks festival in Atami in 2022",
        },
      ],
    },
    {
      title: "New Year, Ocean Sunrise",
      text: "A sunrise over the sea on Lunar New Year’s Day",
      date: "2022",
      location: "Atami, Japan",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1skbcs1PLSCBQMt4j-do_CmKK9xtUbUGq/preview",
          alt: "Sunrise over the sea in Atami on Lunar New Year’s Day in 2022",
        },
      ],
    },
    {
      title: "MacLehose Trail Section 2",
      text: "Hong Kong got me into hiking",
      date: "2021",
      location: "Long Ke → Pak Tam Au",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1iyRhDpRONtwgNse9-pL72SpdCN8E7Rqi/preview",
          alt: "MacLehose Trail Section 2, Long Ke to Pak Tam Au",
        },
      ],
    },
    {
      title: "Mermaid Lagoon",
      text: "A little trip into Ariel’s world",
      date: "2021",
      location: "Tokyo DisneySea",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1wD1yx4QuoH8voIyr020CO9IbgPbYNXqy/preview",
          alt: "Mermaid Lagoon, the Little Mermaid area at Tokyo DisneySea in 2021",
        },
      ],
    },
    {
      title: "Disney Halloween",
      text: "Halloween dress-up with my girls.",
      date: "2023",
      location: "Hong Kong Disneyland",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1bD26DrsBzKIivP60mkk-Wf2dxY41vH2U/preview",
          alt: "Halloween dress-up with my girls at Hong Kong Disneyland, photo 1",
        },
        {
          type: "drive",
          src: "https://drive.google.com/file/d/16NOGGN_EzNHrvZNe7NPgZPYK7XHxhMX5/preview",
          alt: "Halloween dress-up with my girls at Hong Kong Disneyland, photo 2",
        },
        {
          type: "drive",
          src: "https://drive.google.com/file/d/18wG2nepyVgAldB8oCAt9plz26YRq3xXo/preview",
          alt: "Halloween dress-up with my girls at Hong Kong Disneyland, photo 3",
        },
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1j2gUxW0IUzKs3B0q61lTluRm3LJDEpCO/preview",
          alt: "Halloween dress-up with my girls at Hong Kong Disneyland, photo 4",
        },
      ],
    },
    {
      title: "Chongqing, My Hometown",
      credit: {
        text: "Video by",
        creator: "LaLin Photography",
        url: "https://www.youtube.com/watch?v=2BhN8c2iRM0",
      },
      text: "Welcome to my mountain city.",
      date: "",
      location: "",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/2BhN8c2iRM0",
          alt: "Hometown video",
        },
      ],
    },
    {
      title: "Chongqing Hotpot",
      credit: {
        text: "Video by",
        creator: "saintcavish",
        url: "https://www.youtube.com/watch?v=N_vDjouiCrk",
      },
      text: "A taste of home: Chongqing hotpot.",
      date: "",
      location: "",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/N_vDjouiCrk",
          alt: "Chongqing hotpot video",
        },
      ],
    },
    {
      title: "Chongqing Xiaomian",
      credit: {
        text: "Video by",
        creator: "iChongqing",
        url: "https://www.youtube.com/watch?v=1E_K0jyP2Bs",
      },
      text: "A taste of home: Chongqing noodles.",
      date: "",
      location: "",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/1E_K0jyP2Bs",
          alt: "Chongqing Xiaomian noodle video",
        },
      ],
    },
    {
      title: "Snack Party",
      text: "1st Attempt at Stop-Motion Animation in 2016",
      date: "",
      location: "",
      media: [
        {
          type: "drive",
          src: "https://drive.google.com/file/d/1TzOUHnAP3_Zec9T2s6vzEkMB8DWw0Shz/preview",
          alt: "Snack Party — first attempt at stop-motion animation in 2016",
        },
      ],
    },
  ],
};
