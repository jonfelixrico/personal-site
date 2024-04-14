import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './draw-together.md'
import {
  ICON_EXPRESS_JS,
  ICON_GITHUB,
  ICON_NEW_TAB,
  ICON_REACT,
  ICON_SOCKET_IO,
} from '@/modules/common/icons'

const project: Project = {
  id: 'draw-together',
  description: markdown,
  image: '/portfolio/draw-together/preview.png',
  title: 'Draw Together',
  links: [
    {
      icon: ICON_GITHUB,
      label: 'GitHub monorepo',
      url: 'https://github.com/jonfelixrico/draw-together',
    },
    {
      icon: ICON_NEW_TAB,
      label: 'Website',
      url: 'https://draw-together.jonfelixrico.dev',
    },
  ],
  tech: [
    {
      icon: ICON_REACT,
      label: 'React',
    },
    {
      icon: ICON_EXPRESS_JS,
      label: 'Express.js',
    },
    {
      icon: ICON_SOCKET_IO,
      label: 'Socket.IO',
    },
  ],
}

export default project
