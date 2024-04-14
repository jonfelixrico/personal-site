import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './mockiyomi.md'
import {
  ICON_ANT_DESIGN,
  ICON_GITHUB,
  ICON_NEW_TAB,
  ICON_NEXT_JS,
  ICON_TAILWIND_CSS,
} from '@/modules/common/icons'

const project: Project = {
  title: 'Mockiyomi',
  description: markdown,
  image: '/portfolio/mockiyomi/preview.png',
  id: 'project-mockiyomi',

  tech: [
    {
      label: 'Next.js',
      icon: ICON_NEXT_JS,
    },
    {
      label: 'TailwindCSS',
      icon: ICON_TAILWIND_CSS,
    },
    {
      label: 'Ant Design',
      icon: ICON_ANT_DESIGN,
    },
  ],

  links: [
    {
      icon: ICON_GITHUB,
      label: 'GitHub repository',
      url: 'https://github.com/jonfelixrico/mockiyomi',
    },
    {
      icon: ICON_NEW_TAB,
      label: 'Website',
      url: 'https://mockiyomi.jonfelixrico.dev',
    },
  ],
}
export default project
