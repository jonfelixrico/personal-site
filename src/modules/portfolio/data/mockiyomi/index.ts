import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './mockiyomi.md'

const project: Project = {
  title: 'Mockiyomi',
  description: markdown,
  image: '/portfolio/mockiyomi/preview.png',
  id: 'project-mockiyomi',

  tech: [
    {
      label: 'Next.js',
      icon: '/icons/next-js.svg',
    },
    {
      label: 'TailwindCSS',
      icon: '/icons/tailwind-css.svg',
    },
    {
      label: 'Ant Design',
      icon: '/icons/ant-design.svg',
    },
  ],

  links: [
    {
      icon: 'icons/github.svg',
      label: 'GitHub repository',
      url: 'https://github.com/jonfelixrico/mockiyomi',
    },
    {
      icon: 'icons/new-tab.svg',
      label: 'Website',
      url: 'https://mockiyomi.jonfelixrico.dev',
    },
  ],
}
export default project
