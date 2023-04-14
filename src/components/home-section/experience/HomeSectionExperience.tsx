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
        <h4 className="text-4xl text-white">{props.header}</h4>
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

function TechIcon(props: { src: string; alt: string; className?: string }) {
  return (
    <div className={classnames('relative h-20 w-20', props.className)}>
      <Image src={props.src} alt={props.alt} fill />
    </div>
  )
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
        <TechIcon src={src} alt={label} key={index} />
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
      <div className="grid grid-cols-12 w-full gap-4">
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
          className="row-start-1 col-span-6"
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
          className="row-start-1 col-span-6"
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
          className="row-start-2 col-span-6 col-start-4"
        />
      </div>
    </div>
  )
}

function SecondaryTechSection(props: { className?: string }) {
  return (
    <div className={props.className}>
      <h3 className="text-center text-4xl text-accent mb-5">
        Other stuff that I've used
      </h3>
      <div className="flex flex-row">
        <TechIcon src="icons/react.svg" alt="React" />
        <TechIcon src="icons/docker.svg" alt="React" />
        <TechIcon src="icons/spring-boot.svg" alt="React" />
        <TechIcon src="icons/angular.svg" alt="React" />
      </div>
    </div>
  )
}

export default function HomeSectionExperience(props: { className?: string }) {
  return (
    <div className={classnames('py-10 min-h-screen', props.className)}>
      <HeaderAndDescription className="mx-auto max-w-screen-lg" />

      <div className="bg-card py-8 mb-10">
        <MainTechSection className="mx-auto max-w-screen-lg" />
      </div>

      <SecondaryTechSection className="mx-auto max-w-screen-lg" />
    </div>
  )
}
