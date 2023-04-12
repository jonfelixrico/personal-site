import FeaturedTemplateLayout from './FeaturedTemplateLayout'
import FeaturedTemplateTechList from './FeaturedTemplateTechList'

export default function FeaturedWisdom() {
  return (
    <FeaturedTemplateLayout
      projectName="Wisdom Bot"
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
      footer={
        <FeaturedTemplateTechList
          items={[
            {
              name: 'Quasar Framework',
              iconSrc: 'tech-stack/quasar-framework.svg',
            },
            {
              name: 'Vue.js',
              iconSrc: 'tech-stack/vue-js.svg',
            },
            {
              name: 'TypeScript',
              iconSrc: 'tech-stack/typescript.svg',
            },
            {
              name: 'Nest.js',
              iconSrc: 'tech-stack/nest-js.svg',
            },
            {
              name: 'Discord.js',
              iconSrc: 'tech-stack/discord-js.svg',
            },
            {
              name: 'Spring Boot',
              iconSrc: 'tech-stack/spring-boot.svg',
            },
            {
              name: 'Java',
              iconSrc: 'tech-stack/java.svg',
            },
            {
              name: 'EventStoreDB',
              iconSrc: 'tech-stack/eventstoredb.svg',
            },
            {
              name: 'MongoDB',
              iconSrc: 'tech-stack/mongodb.svg',
            },
          ]}
        />
      }
    />
  )
}
