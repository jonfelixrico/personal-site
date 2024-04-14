import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './wisdom.md'
import {
  ICON_CYPRESS,
  ICON_DOCKER,
  ICON_EVENSOURCEDB,
  ICON_GITHUB,
  ICON_GITHUB_ACTIONS,
  ICON_JEST,
  ICON_MONGODB,
  ICON_NEST_JS,
  ICON_QUASAR_FRAMEWORK,
  ICON_SPRING_BOOT,
  ICON_VUE_JS,
} from '@/modules/common/icons'

const project: Project = {
  title: 'Wisdom',
  description: markdown,
  image: '/portfolio/wisdom/panel/home.png',
  id: 'project-wisdom',

  tech: [
    {
      label: 'Vue.js',
      icon: ICON_VUE_JS,
    },
    {
      label: 'Quasar Framework',
      icon: ICON_QUASAR_FRAMEWORK,
    },
    {
      label: 'Cypress',
      icon: ICON_CYPRESS,
    },
    {
      label: 'Nest.js',
      icon: ICON_NEST_JS,
    },
    {
      label: 'Jest',
      icon: ICON_JEST,
    },
    {
      label: 'Spring Boot',
      icon: ICON_SPRING_BOOT,
    },
    {
      label: 'EventStoreDB',
      icon: ICON_EVENSOURCEDB,
    },
    {
      label: 'MongoDB',
      icon: ICON_MONGODB,
    },
    {
      label: 'Docker',
      icon: ICON_DOCKER,
    },
    {
      label: 'GitHub Actions',
      icon: ICON_GITHUB_ACTIONS,
    },
  ],

  links: [
    {
      icon: ICON_GITHUB,
      label: 'REST API',
      url: 'https://github.com/jonfelixrico/wisdom-core-2022',
    },
    {
      icon: ICON_GITHUB,
      label: 'Discord Bot',
      url: 'https://github.com/jonfelixrico/wisdom-bot-2022',
    },
    {
      icon: ICON_GITHUB,
      label: 'Web app front-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-client-2022',
    },
    {
      icon: ICON_GITHUB,
      label: 'Web app back-end',
      url: 'https://github.com/jonfelixrico/wisdom-panel-server-2022',
    },
  ],
}
export default project
