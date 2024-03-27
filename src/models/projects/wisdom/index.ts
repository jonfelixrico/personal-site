import { Project } from '@/models/projects/project.interface'
import markdown from './wisdom.md'

const project: Project = {
  title: 'Wisdom',
  description: markdown,
  image: '/portfolio/wisdom/panel/home.png',
  id: 'project-wisdom',  

  tech: [
    {
      label: 'Vue.js',
      icon: '/icons/vue-js.svg',
    },
    {
      label: 'Quasar Framework',
      icon: '/icons/quasar-framework.svg',
    },
    {
      label: 'Cypress',
      icon: '/icons/cypress.svg',
    },
    {
      label: 'Nest.js',
      icon: '/icons/nest-js.svg',
    },
    {
      label: 'Jest',
      icon: '/icons/jest.svg',
    },
    {
      label: 'Spring Boot',
      icon: '/icons/spring-boot.svg',
    },
    {
      label: 'EventStoreDB',
      icon: '/icons/eventstoredb.svg',
    },
    {
      label: 'MongoDB',
      icon: '/icons/mongodb.svg',
    },
    {
      label: 'Docker',
      icon: '/icons/docker.svg',
    },
    {
      label: 'GitHub Actions',
      icon: '/icons/github-actions.svg',
    },
  ],

  links: [
    {
      icon: 'icons/github.svg',
      label: 'REST API',
      url: 'https://github.com/jonfelixrico/wisdom-core-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Discord Bot',
      url: 'https://github.com/jonfelixrico/wisdom-bot-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Web app front-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-client-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Web app back-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-server-2022',
    },
  ],
}
export default project
