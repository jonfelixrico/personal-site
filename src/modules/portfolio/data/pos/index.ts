import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './pos.md'
import {
  ICON_CHAKRA_UI,
  ICON_CYPRESS,
  ICON_GITHUB,
  ICON_JUNIT,
  ICON_NEXT_JS,
  ICON_POSTGRESQL,
  ICON_SPRING_BOOT,
} from '@/modules/common/icons'

const project: Project = {
  title: 'Point-of-sale system',
  description: markdown,
  image: '/portfolio/pos/billing-details.png',
  id: 'project-pos',

  tech: [
    {
      label: 'Next.js',
      icon: ICON_NEXT_JS,
    },
    {
      label: 'Chakra UI',
      icon: ICON_CHAKRA_UI,
    },
    {
      label: 'Cypress',
      icon: ICON_CYPRESS,
    },
    {
      label: 'Spring Boot',
      icon: ICON_SPRING_BOOT,
    },
    {
      label: 'JUnit',
      icon: ICON_JUNIT,
    },
    {
      label: 'PostgreSQL',
      icon: ICON_POSTGRESQL,
    },
  ],

  links: [
    {
      icon: ICON_GITHUB,
      label: 'Front-end repository',
      url: 'https://github.com/jonfelixrico/gowpet-pos-frontend',
    },
    {
      icon: ICON_GITHUB,
      label: 'Back-end repository',
      url: 'https://github.com/jonfelixrico/gowpet-pos-backend',
    },
  ],
}
export default project
