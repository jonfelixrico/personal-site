import FeaturedTemplateLayout from './FeaturedTemplateLayout'
import FeaturedTemplateTechList from './FeaturedTemplateTechList'

export default function FeaturedMarites() {
  return (
    <FeaturedTemplateLayout
      projectName="Marites"
      imageSrc="/portfolio/wisdom/panel/home.png"
      details={
        <div>
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
              name: 'PocketBase',
              iconSrc: 'icons/pocketbase.svg',
            },
          ]}
        />
      }
    />
  )
}
