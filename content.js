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

  // Add publications using the structure shown in the commented example.
  publications: [
    // {
    //   year: "2026",
    //   title: "Publication title",
    //   authors: "Zhuojun Jiang, Coauthor Name",
    //   venue: "Conference or Journal",
    //   links: [
    //     { label: "PDF", url: "assets/papers/paper.pdf" },
    //     { label: "DOI", url: "https://doi.org/..." },
    //   ],
    // },
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
      text: "Two papers accepted to IEEE VIS 2026. Looking forward to seeing everyone in Boston!",
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
