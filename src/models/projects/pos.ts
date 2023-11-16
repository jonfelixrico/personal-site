import { Project } from '@/types/project.interface'
import markdown from './pos.md'

const project: Project = {
  title: '(WIP) Point-of-sale',
  description: markdown,
  image: '/portfolio/pos/billing-details.png',

  tech: [
    {
      label: 'Next.js',
      icon: '/icons/next-js.svg',
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
