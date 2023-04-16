import { CgArrowTopRightR } from 'react-icons/cg'
import { FeaturedLayout } from './FeaturedTemplates'

export default function FeaturedWisdom() {
  return (
    <FeaturedLayout
      title="Wisdom Bot"
      imageSrc="/portfolio/wisdom/panel/home.png"
      details={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin et tortor vel ullamcorper. Praesent dolor massa, dapibus
          vel sollicitudin vulputate, ultricies vel libero.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin et tortor vel ullamcorper. Praesent dolor massa, dapibus
          vel sollicitudin vulputate, ultricies vel libero.
        </div>
      }
      techList={[
        {
          name: 'Vue.js',
          iconSrc: 'icons/vue-js.svg',
        },
        {
          name: 'Nest.js',
          iconSrc: 'icons/nest-js.svg',
        },
        {
          name: 'Spring Boot',
          iconSrc: 'icons/spring-boot.svg',
        },
        {
          name: 'EventStoreDB',
          iconSrc: 'icons/eventstoredb.svg',
        },
        {
          name: 'MongoDB',
          iconSrc: 'icons/mongodb.svg',
        },
      ]}
      side={
        <a
          href="https://wisdom.csaservers.com"
          className="text-accent-2 text-xl"
          target="_blank"
        >
          <CgArrowTopRightR />
        </a>
      }
    />
  )
}
