import FeaturedTemplateLayout from './FeaturedTemplateLayout'

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
      techList={[
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
          name: 'PocketBase',
          iconSrc: 'tech-stack/pocketbase.svg',
        },
      ]}
    />
  )
}
