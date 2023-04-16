import FeaturedTemplateLayout from './FeaturedTemplateLayout'

export default function FeaturedMarites() {
  return (
    <FeaturedTemplateLayout
      title="Marites"
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
  )
}
