// Edit this file to update the website. Saving it will refresh Live Server.
const SITE_CONTENT = {
  profile: {
    name: "Zhuojun Jiang",
    initials: "ZJ",
    location: "Tempe, Arizona",
    bio: {
      intro: "A PhD student in Computer Science,",
      lab: {
        label: "SVL",
        url: "https://svl-at-asu.github.io/",
      },
      affiliation: "@ Arizona State University.",
      before:
        "Before this, I majored in Industrial Engineering & Mechanical Engineering (Ergonomics & HCI). I study how human judgment, creativity, and AI interact in data visualization.",
    },
    email: "zjian115@asu.edu",
    cv: "",
    image: "assets/avatar/cactus-tint-circle.png",
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
      venue: "IEEE Visualization Conference",
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
      venue: "IEEE Visualization Conference",
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
      authors: ["Zhuojun Jiang", "Anjana Arunkumar", "Chris Bryan"],
      venue: "IEEE Visualization Conference",
      abstract:
        "Color is a powerful tool in data visualization, but for individuals with color vision deficiencies (CVD), hue can become a barrier rather than an aid. Factor analysis reveals two dominant perceptual dimensions: functional utility and affective experience. While normal vision participants prioritize functional clarity, CVD users rely more on structural cues and emotional resonance, particularly when color is unreliable. Qualitative insights show that perceptual breakdowns occur not only in high-interference charts but also when redundant encoding or layout scaffolding is missing. We synthesize these findings and offer empirically grounded design recommendations to guide inclusive visualization practices. Our results argue that accessibility must go beyond color correction, embracing structural clarity, redundancy, and real-user validation to ensure inclusive visual communication.",
      links: [
        {
          label: "PDF",
          url: "https://chrisbryan.github.io/assets/pdf/jiang2026hueman.pdf",
        },
        {
          label: "DOI / Publisher",
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
      venue: "IEEE Pacific Visualization Conference Visual Storytelling Contest",
      award: "Oral Presentation · Honorable Mention",
      abstract:
        "This interactive visual data story introduces Wagyu through its four Japanese cattle breeds, more than 320 regional brands, export growth, grading systems, and cultural significance. Combining interactive maps, charts, illustrations, and a personal narrative centered on Kobe beef, the story explains what distinguishes Wagyu and how Japan’s regional production traditions have reached a global audience.",
      links: [
        {
          label: "Publisher",
          url: "https://visstory.github.io/2025/",
        },
        {
          label: "Data Story",
          url: "https://y0uk1.github.io/PacificVis2025/",
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
      award: "Oral Presentation",
      abstract:
        "This study examined how familiarity and mask wearing affect self-other judgments in face recognition. Participants completed four experimental sessions using morphed images that combined their own face with either a friend’s or an unfamiliar person’s face, with and without masks. Fifteen morphing levels were used to estimate the point at which self-other judgments reached chance level. The threshold tended to be lower for self-friend morphs than for self-unknown morphs, suggesting that familiarity may influence how facial representations of the self and others overlap.",
      links: [
        {
          label: "PDF",
          url: "https://www.jstage.jst.go.jp/article/cogpsy/2023/0/2023_2/_pdf/-char/ja",
        },
        {
          label: "DOI / Publisher",
          url: "https://doi.org/10.14875/cogpsy.2023.0_2",
        },
      ],
    },
  ],

  // Add research projects using the structure shown in the commented example.
  projects: [
    // {
    //   title: "Project title",
    //   description: "A concise explanation of the problem, approach, and contribution.",
    //   tags: ["Visualization", "HCI"],
    //   url: "",
    // },
  ],

  news: [
    {
      date: "Jul 17, 2026",
      text: "Two papers accepted to IEEE VIS 2026. See you in Boston! 🍩",
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
  ],

  // Life can contain personal notes, photos, observations, or unfinished thoughts.
  life: [
    // {
    //   type: "Thought",
    //   date: "Oct 2026",
    //   title: "A small thought worth keeping",
    //   text: "Write a short reflection, observation, or story here.",
    //   image: "", // Example: "assets/life/photo.jpg"
    //   url: "", // Optional link to a longer post or photo album
    // },
  ],
};
