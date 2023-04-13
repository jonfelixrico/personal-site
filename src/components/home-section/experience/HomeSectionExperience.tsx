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

function MainTechCard(props: { children?: ReactNode; className?: string }) {
  return (
    <div className={classnames('p-3 rounded-lg bg-app', props.className)}>
      {props.children}
    </div>
  )
}

function MainTechIcon(props: { src: string; alt: string; className?: string }) {
  return (
    <div className={classnames('relative h-16 w-16', props.className)}>
      <Image src={props.src} alt={props.alt} fill />
    </div>
  )
}

export function MainTechSection(props: { className?: string }) {
  return (
    <div className={props.className}>
      <h3 className="text-center text-4xl text-accent mb-5">
        The bread and butter
      </h3>
      <div className="grid grid-cols-8 w-full gap-4">
        <MainTechCard className="row-start-1 col-span-4">
          <div className="flex flex-row justify-center">
            <MainTechIcon src="icons/vue-js.svg" alt="Vue" />
            <MainTechIcon src="icons/quasar-framework.svg" alt="Vue" />
          </div>
          <h4 className="text-2xl text-white text-center">Front-end</h4>
        </MainTechCard>

        <MainTechCard className="row-start-1 col-span-4">
          <div className="row-start-1 flex flex-row justify-center">
            <MainTechIcon src="icons/nest-js.svg" alt="Vue" />
          </div>
          <h4 className="text-2xl text-white text-center">Back-end</h4>
        </MainTechCard>

        <MainTechCard className="row-start-2 col-start-3 col-span-4">
          <div className="flex flex-row justify-center">
            <MainTechIcon src="icons/mongodb.svg" alt="Vue" />
            <MainTechIcon src="icons/mysql.svg" alt="Vue" />
            <MainTechIcon src="icons/postgresql.svg" alt="Vue" />
          </div>
          <h4 className="text-2xl text-white text-center">Databases</h4>
        </MainTechCard>
      </div>
    </div>
  )
}

export default function HomeSectionExperience(props: { className?: string }) {
  return (
    <div className={classnames('py-10 min-h-screen', props.className)}>
      <HeaderAndDescription className="mx-auto max-w-screen-lg" />

      <div className="bg-card py-8">
        <MainTechSection className="mx-auto max-w-screen-lg" />
      </div>
    </div>
  )
}
