import classnames from 'classnames'
import Image from 'next/image'
import { ReactNode } from 'react'

function HeaderAndDescription(props: { className?: string }) {
  return (
    <div className={classnames('row-start-2 row-span-4', props.className)}>
      <div className="mb-5">
        <h2 className="text-5xl font-semibold text-primary">Experience</h2>
        <div className="text-secondary text-2xl">Lorem ipsum dolor</div>
      </div>

      <div className="mb-10 text-xl">
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </span>
        <br />
        <br />
        <span>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </span>
      </div>
    </div>
  )
}

function MainTechItem(props: {
  body: ReactNode
  header: string
  side: ReactNode
  className?: string
}) {
  return (
    <div className={classnames('p-3 rounded-lg bg-app', props.className)}>
      <div className="flex flex-row items-center justify-between mb-3">
        <h4 className="text-3xl text-white">{props.header}</h4>
        {props.side}
      </div>
      {props.body}
    </div>
  )
}

interface Icon {
  src: string
  label: string
}

function MainTechIconList(props: { icons: Icon[]; className?: string }) {
  return (
    <div
      className={classnames(
        'flex flex-row justify-center gap-3',
        props.className
      )}
    >
      {props.icons.map(({ src, label }, index) => (
        <div
          className={'relative lg:h-20 lg:w-20 md:h-14 md:w-14 h-12 w-12'}
          key={index}
        >
          <Image src={src} alt={label} fill />
        </div>
      ))}
    </div>
  )
}

function MainTechSection(props: { className?: string }) {
  return (
    <div className={props.className}>
      <h3 className="text-center text-4xl text-accent mb-5">
        The bread and butter
      </h3>

      <div className="grid md:grid-cols-2 w-full gap-4">
        <MainTechItem
          header="Front-end"
          body={
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          }
          side={
            <MainTechIconList
              icons={[
                {
                  src: 'icons/vue-js.svg',
                  label: 'Vue',
                },

                {
                  src: 'icons/quasar-framework.svg',
                  label: 'Quasar Framework',
                },
              ]}
            />
          }
        />

        <MainTechItem
          header="Back-end"
          body={
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          }
          side={
            <MainTechIconList
              icons={[
                {
                  src: 'icons/nest-js.svg',
                  label: 'Nest.js',
                },
              ]}
            />
          }
        />

        <MainTechItem
          header="Databases"
          body={
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          }
          side={
            <MainTechIconList
              icons={[
                {
                  src: 'icons/mongodb.svg',
                  label: 'MongoDB',
                },
                {
                  src: 'icons/postgresql.svg',
                  label: 'PostgreSQL',
                },
              ]}
            />
          }
        />

        <MainTechItem
          header="Automation & Deployment"
          body={
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          }
          side={
            <MainTechIconList
              icons={[
                {
                  src: 'icons/docker.svg',
                  label: 'Docker',
                },
                {
                  src: 'icons/github-actions.svg',
                  label: 'Github Actions',
                },
              ]}
            />
          }
        />
      </div>
    </div>
  )
}

const ICONS: Icon[] = [
  {
    src: 'icons/react.svg',
    label: 'React',
  },
  {
    src: 'icons/next-js.svg',
    label: 'Next.js',
  },
  {
    src: 'icons/tailwind-css.svg',
    label: 'TailwindCSS',
  },
  {
    src: 'icons/angular.svg',
    label: 'Angular',
  },
  {
    src: 'icons/express-js.svg',
    label: 'Express.js',
  },
  {
    src: 'icons/node-js.svg',
    label: 'NodeJS',
  },
  {
    src: 'icons/typescript.svg',
    label: 'TypeScript',
  },
  {
    src: 'icons/spring-boot.svg',
    label: 'Spring Boot',
  },
  {
    src: 'icons/eventstoredb.svg',
    label: 'EventStoreDB',
  },
  {
    src: 'icons/mysql.svg',
    label: 'MySQL',
  },
  {
    src: 'icons/java.svg',
    label: 'Java',
  },
  {
    src: 'icons/pocketbase.svg',
    label: 'PocketBase',
  },
  {
    src: 'icons/nginx.svg',
    label: 'NGINX',
  },
  {
    src: 'icons/discord-js.svg',
    label: 'Discord.js',
  },
]

function SecondaryTechSection(props: { className?: string }) {
  return (
    <div className={props.className}>
      <h3 className="text-center text-4xl text-accent mb-5">
        ...and others that I've fiddled with
      </h3>

      <div className="flex flex-row flex-wrap gap-6">
        {ICONS.map(({ src, label }, index) => (
          <div
            key={index}
            className="relative lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 h-12 w-12"
          >
            <Image src={src} alt={label} fill />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomeSectionExperience(props: { className?: string }) {
  return (
    <div className={classnames('py-10 min-h-screen', props.className)}>
      <HeaderAndDescription className="mx-auto max-w-screen-lg px-5" />

      <div className="bg-card py-8">
        <MainTechSection className="mx-auto max-w-screen-lg mb-20 px-5" />
        <SecondaryTechSection className="mx-auto max-w-screen-lg px-5" />
      </div>
    </div>
  )
}
