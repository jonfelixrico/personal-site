import { Project } from '@/models/projects/project.interface'
import markdown from './pos.md'

const project: Project = {
  title: 'Point-of-sale system',
  description: markdown,
  image: '/portfolio/pos/billing-details.png',
  id: 'project-pos',

  tech: [
    {
      label: 'Next.js',
      icon: '/icons/next-js.svg',
    },
    {
      label: 'Chakra UI',
      icon: '/icons/chakra-ui.svg',
    },
    {
      label: 'Cypress',
      icon: '/icons/cypress.svg',
    },
    {
      label: 'Spring Boot',
      icon: '/icons/spring-boot.svg',
    },
    {
      label: 'JUnit',
      icon: '/icons/junit.svg',
    },
    {
      label: 'PostgreSQL',
      icon: '/icons/postgresql.svg',
    },
    {
      label: 'GitHub Actions',
      icon: '/icons/github-actions.svg',
    },
  ],

  links: [
    {
      icon: 'icons/github.svg',
      label: 'Front-end repository',
      url: 'https://github.com/jonfelixrico/gowpet-pos-frontend',
    },
    {
      icon: 'icons/github.svg',
      label: 'Back-end repository',
      url: 'https://github.com/jonfelixrico/gowpet-pos-backend',
    },
  ],
}
export default project
