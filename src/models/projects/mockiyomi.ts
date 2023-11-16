import { Project } from '@/types/project.interface'
import markdown from './mockiyomi.md'

const project: Project = {
  title: 'Mockiyomi',
  description: markdown,
  image: '/portfolio/mockiyomi/preview.png',

  tech: [
    {
      label: 'Next.js',
      icon: '/icons/next-js.svg',
    }
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
