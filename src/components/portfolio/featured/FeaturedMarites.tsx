import { FeaturedLayout } from './FeaturedTemplates'
import { BsGithub } from 'react-icons/bs'
import { CgArrowTopRightR } from 'react-icons/cg'

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
      side={
        <div className="flex flex-row gap-3">
          <a
            href="https://marites.jonfelixrico.dev"
            className="text-accent-2 text-2xl"
            target="_blank"
          >
            <CgArrowTopRightR />
          </a>

          <a
            href="https://github.com/jonfelixrico/marites"
            className="text-accent-2 text-2xl"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      }
    />
  )
}
