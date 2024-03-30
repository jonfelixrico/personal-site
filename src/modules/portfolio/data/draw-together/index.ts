import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './draw-together.md'

const project: Project = {
  id: 'draw-together',
  description: markdown,
  image: '/portfolio/draw-together/preview.png',
  title: 'Draw Together',
  links: [
    {
      icon: '/icons/github.svg',
      label: 'GitHub monorepo',
      url: 'https://github.com/jonfelixrico/draw-together'
    },
    {
      icon: '/icons/new-tab.svg',
      label: 'Website',
      url: 'https://draw-together.jonfelixrico.dev'
    }
  ],
  tech: [
    {
      icon: '/icons/react.svg',
      label: 'React',
    },
    {
      icon: '/icons/express-js.svg',
      label: 'Express.js'
    },
    {
      icon: '/icons/socket-io.svg',
      label: 'Socket.IO'
    }
  ] 
}

export default project