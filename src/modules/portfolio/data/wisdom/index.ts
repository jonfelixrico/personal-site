import { Project } from '@/modules/portfolio/data/project.interface'
import markdown from './wisdom.md'
import {
  ICON_CYPRESS,
  ICON_EVENTSTOREDB,
  ICON_GITHUB,
  ICON_JEST,
  ICON_MONGODB,
  ICON_NEST_JS,
  ICON_NEW_TAB,
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
      icon: ICON_EVENTSTOREDB,
    },
    {
      label: 'MongoDB',
      icon: ICON_MONGODB,
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
    {
      icon: ICON_NEW_TAB,
      label: 'Website',
      url: 'https://wisdom.csaservers.com',
    },
  ],
}
export default project
