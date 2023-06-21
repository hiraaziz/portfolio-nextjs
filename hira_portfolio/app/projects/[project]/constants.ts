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
    pagename: "ecommere",
    title: "Ecommerce Application",
    description:
      "Ecommerce Fully responsive application, build with Nextjs 13, Typescript, Tailwind css, protect routes with Next Auth and Sanity for products. In backend, I have used Drizzle Orm, with Postgress DB and stripe for secure payment",
    category: "Full Stack",
    subject: "Full Stack Ecommerce application",
    website: "https://hira-ecommerce.vercel.app/",
    github: "https://github.com/hiraaziz/ecommerce",
    img: "/ecommerce.png",
  },
  {
    pagename: "panaverse",
    title: "Panaverse",
    description:
      "Fully responsive Panaverse site build with Nextjs 13, Tailwind css and Framer Motion ",
    category: "Frontend",
    subject: "Web Design",
    website: 'https://panaverse-rho.vercel.app/"',
    github: "https://github.com/hiraaziz/panaverse",
    img: "/panaverse.png",
  },

  {
    pagename: "pricing",
    title: "Pricing UI",
    description: "Fully responsive pricing UI Card in Nextjs 13 and Chakra UI",
    category: "Frontend",
    subject: "Web Design",
    website: "https://pricingui-steel.vercel.app/",
    github: "https://github.com/hiraaziz/pricingui",
    img: "/pricing.png",
  },

  {
    pagename: "emaan",
    title: "Emaan Institute",
    description:
      "Fully responsive Educational Institute Frontend website build in Reactjs, tailwind and Framer Motion ",
    category: "Frontend",
    subject: "Web Design",
    website: "https://emaansite.netlify.app/",
    github: "https://emaan.edu.pk/",
    img: "/emaan.png",
  },
  {
    pagename: "quiz",
    title: "Quiz Appication",
    description: "Fuuly responsive Quiz Application in Reactjs and Css",
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
      "Fully responsive Resume Builder Application build using Reactjs, use Context and use Reducer and Material UI",
    category: "Frontend",
    subject: "Web Design",
    website: "https://hiraresumebuilder.netlify.app/",
    github: "https://github.com/hiraaziz/Resume-Builder",
    img: "/resume.png",
  },
  {
    pagename: "todo",
    title: "Todo Application",
    description:
      "Fully Responsive full stack Application using Nextjs, tailwind, Drizzle, Postgress",
    category: "Full Stack",
    subject: "Web Design",
    website: "https://todoapp-tau-orcin.vercel.app/",
    github: "https://github.com/hiraaziz/todoapp",
    img: "/todo.png",
  },
  {
    pagename: "blog",
    title: "Blog Post Application",
    description:
      "Fully responsive Blog Application using Nextjs, Contentful headless cms to manage blogs and tailwind css",
    category: "Frontend",
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
