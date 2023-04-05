export type projectTypes = {
  pagename: string;
  title: string;
  description: string;
  category: string;
  subject: string;
  website: string;
  github: string;
  img: string;
};
export const projectdata: projectTypes[] = [
  {
    pagename: "panaverse",
    title: "Panaverse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: 'https://panaverse-rho.vercel.app/"',
    github: "https://github.com/hiraaziz/panaverse",
    img: "/panaverse.png",
  },

  {
    pagename: "pricing",
    title: "Pricing UI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: "https://pricingui-steel.vercel.app/",
    github: "https://github.com/hiraaziz/pricingui",
    img: "/pricing.png",
  },

  {
    pagename: "emaan",
    title: "Emaan Institute",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: "https://emaansite.netlify.app/",
    github: "https://github.com/hiraaziz/emaan-app",
    img: "/emaan.png",
  },
  {
    pagename: "quiz",
    title: "Quiz Appication",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: "https://hiraquizapp.netlify.app/",
    github: "https://github.com/hiraaziz?tab=repositories",
    img: "/quiz.png",
  },
  {
    pagename: "resume",
    title: "Resume Builder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: "https://hiraresumebuilder.netlify.app/",
    github: "https://github.com/hiraaziz/Resume-Builder",
    img: "/resume.png",
  },
  {
    pagename: "todo",
    title: "Todo Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Web Design",
    website: "https://todoapp-tau-orcin.vercel.app/",
    github: "https://github.com/hiraaziz/todoapp",
    img: "/todo.png",
  },
  {
    pagename: "blog",
    title: "Blog Post Application",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.",
    category: "Next js",
    subject: "Contentful Nextjs 13",
    website: "https://hira-contentful-next.vercel.app/",
    github: "https://github.com/hiraaziz/userprofile",
    img: "/contentful.png",
  },
];

export function projectdetail(projectParams?: string): projectTypes[] {
  if (projectParams) {
    const singleProject = projectdata.filter(
      (p) => projectParams === p.pagename
    );
    return singleProject;
  } else {
    return projectdata;
  }
}
