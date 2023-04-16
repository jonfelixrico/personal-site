import FeaturedTemplateLayout from './FeaturedTemplateLayout'

export default function FeaturedWisdom() {
  return (
    <FeaturedTemplateLayout
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
          name: 'Quasar Framework',
          iconSrc: 'icons/quasar-framework.svg',
        },
        {
          name: 'Vue.js',
          iconSrc: 'icons/vue-js.svg',
        },
        {
          name: 'TypeScript',
          iconSrc: 'icons/typescript.svg',
        },
        {
          name: 'Nest.js',
          iconSrc: 'icons/nest-js.svg',
        },
        {
          name: 'Discord.js',
          iconSrc: 'icons/discord-js.svg',
        },
        {
          name: 'Spring Boot',
          iconSrc: 'icons/spring-boot.svg',
        },
        {
          name: 'Java',
          iconSrc: 'icons/java.svg',
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
    />
  )
}
