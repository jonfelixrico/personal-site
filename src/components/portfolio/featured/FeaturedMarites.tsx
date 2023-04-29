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
          Marites is a chat app inspired by{' '}
          <a target="_blank" href="https://www.youtube.com/watch?v=zQyrwxMPm88">
            Fireship&apos;s chat app video
          </a>{' '}
          where he built it using PocketBase and React.
          <br />
          <br />
          For my version, I used PocketBase and Quasar Framework (+ Vue.js). I
          took his idea further by implementing a chatroom system instead of a
          global chat. This allows users to have their own chatrooms where they
          can invite other people to join in.
          <br />
          <br />
          This project was made with the intention of getting my feet wet with
          pre-made back-end services to prepare myself to make projects using
          more feature-rich BaaS platforms such as Firebase and Supabase.
        </div>
      }
      techList={[
        {
          name: 'Vue.js',
          iconSrc: 'icons/vue-js.svg',
        },
        {
          name: 'Quasar Framework',
          iconSrc: 'icons/quasar-framework.svg',
        },
        {
          name: 'PocketBase',
          iconSrc: 'icons/pocketbase.svg',
        },
      ]}
      bottom={
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
