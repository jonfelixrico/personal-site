import { Project } from '@/types/project.interface'
import markdown from './wisdom.md'

const project: Project = {
  title: 'Wisdom',
  description: markdown,
  image: '/portfolio/wisdom/panel/home.png',

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
      label: 'Nest.js',
      icon: '/icons/nest-js.svg',
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
      url: 'https://github.com/jonfelixrico/wisdom-client-2022',
    },
    {
      icon: 'icons/github.svg',
      label: 'Web app back-end',
      url: 'https://github.com/jonfelixrico/wisdom-server-2022',
    },
  ],
}
export default project
