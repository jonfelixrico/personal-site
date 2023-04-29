import { CgArrowTopRightR } from 'react-icons/cg'
import { FeaturedLayout, LinkButton } from './FeaturedTemplates'
import { BsGithub } from 'react-icons/bs'

export default function FeaturedWisdom() {
  return (
    <FeaturedLayout
      title="Wisdom"
      imageSrc="/portfolio/wisdom/panel/home.png"
      details={
        <div>
          A fun Discord bot that acts like a Magic 8 Ball, but the responses are
          quotes that the users submited. It also has a web app that allows the
          users to have a bigger picture of what quotes have been submitted in
          their Discord server.
          <br />
          <br />
          This is quite a big project which consists of 4 components:
          <ul className="list-disc list-outside ml-10">
            <li>
              The Quotes REST API which stores and dispenses the user-submitted
              quotes. Powered by Spring Boot, MongoDB, and EventStoreDB.
            </li>
            <li>
              The Discord bot that the users mainly interact with. Powered by
              Discord.js and Nest.js.
            </li>
            <li>
              The web app that allows the users to have a bigger picture of what
              quotes their servers have. The front-end is written on top of
              Quasar Framework and Vue, and the back-end is powered by Nest.js,
              Discord REST API, and OAuth.
            </li>
          </ul>
          <br />
          Admittedly, it is very over-engineered. However, it is a project that
          hold dearly and had so much fun with since it allowed me to scratch
          the technical itch of the things that I was curious with.
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
      bottom={
        <div className="flex flex-row flex-wrap gap-3">
          <LinkButton
            href="https://wisdom.csaservers.com"
            icon={<CgArrowTopRightR className="text-lg" />}
            label="Demo"
          />

          <LinkButton
            href="https://github.com/jonfelixrico/wisdom-core-2022"
            icon={<BsGithub className="text-lg" />}
            label="Code - Quotes REST API"
          />

          <LinkButton
            href="https://github.com/jonfelixrico/wisdom-bot-2022"
            icon={<BsGithub className="text-lg" />}
            label="Code - Bot"
          />

          <LinkButton
            href="https://github.com/jonfelixrico/wisdom-panel-client-2022"
            icon={<BsGithub className="text-lg" />}
            label="Code - Web app, front-end"
          />

          <LinkButton
            href="https://github.com/jonfelixrico/wisdom-panel-server-2022"
            icon={<BsGithub className="text-lg" />}
            label="Code - Web app, back-end"
          />
        </div>
      }
    />
  )
}
