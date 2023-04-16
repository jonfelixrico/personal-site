import { FeaturedLayout } from './FeaturedTemplates'

export default function FeaturedMarites() {
  return (
    <FeaturedLayout
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
          name: 'Vue.js',
          iconSrc: 'icons/vue-js.svg',
        },
        {
          name: 'PocketBase',
          iconSrc: 'icons/pocketbase.svg',
        },
      ]}
    />
  )
}
