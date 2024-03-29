import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './draw-together.md'

const project: Project = {
  id: 'draw-together',
  description: markdown,
  image: '/portfolio/mockiyomi/preview.png',
  title: 'Draw Together',
  links: [],
  tech: [] 
}

export default project