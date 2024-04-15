import {
  ICON_ANGULAR,
  ICON_API,
  ICON_CICD,
  ICON_FRONTEND,
  ICON_JAVASCRIPT,
  ICON_NEXT_JS,
  ICON_REACT,
  ICON_TYPESCRIPT,
  ICON_VUE_JS,
} from '@/modules/common/icons'
import TechChip from '@/modules/portfolio/TechChip'
import classnames from 'classnames'
import Image from 'next/image'
import { ReactNode } from 'react'
import { If, Then } from 'react-if'

function ItemLayout(props: {
  /**
   * @deprecated
   */
  body?: ReactNode
  header: string
  side?: ReactNode
  className?: string
  iconSrc: string
  footer?: ReactNode
  /**
   * TODO make required
   */
  children?: ReactNode
}) {
  return (
    <div
      className={classnames(
        'p-5 rounded-lg bg-app-2 flex flex-col gap-3',
        props.className,
      )}
    >
      <div className="flex flex-row items-center gap-3 col-none">
        <div className="relative h-12 w-12">
          <Image alt={props.header} src={props.iconSrc} fill />
        </div>
        <h4 className="text-4xl text-white">{props.header}</h4>
      </div>

      <div className="col-auto">{props.body ?? props.children}</div>

      <If condition={!!props.footer}>
        <Then>
          <div className="flex flex-col gap-y-2">{props.footer}</div>
        </Then>
      </If>
    </div>
  )
}

function TechContainer({
  title,
  items,
}: {
  title: string
  items: {
    label: string
    src: string
  }[]
}) {
  return (
    <div className="rounded bg-app-3 gap-2 p-2 flex flex-col">
      <div className="text-xs">{title}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {items.map(({ label, src }, index) => (
          <TechChip key={index} label={label} src={src} />
        ))}
      </div>
    </div>
  )
}

export default function ContentPrimaryTech() {
  return (
    <div className="grid lg:grid-cols-8 w-full gap-4">
      <ItemLayout
        className="lg:col-span-4"
        header="Front-end"
        iconSrc={ICON_FRONTEND}
        footer={
          <TechContainer
            title="Main Technologies"
            items={[
              {
                label: 'TypeScript',
                src: ICON_TYPESCRIPT,
              },
              {
                label: 'JavaScript',
                src: ICON_JAVASCRIPT,
              },
              {
                label: 'React',
                src: ICON_REACT,
              },
              {
                label: 'Vue.js',
                src: ICON_VUE_JS,
              },
              {
                label: 'Angular',
                src: ICON_ANGULAR,
              },
              {
                label: 'Next.js',
                src: ICON_NEXT_JS,
              },
            ]}
          />
        }
      >
        <p>
          I have been working with Vue.js (under the Quasar Framework) for more
          than three years. I have built complex and interactive user interfaces
          with this front-end stack. It is my go-to whenever I want to work on a
          personal project.
          <br />
          <br />
          In addition to my &quot;bread and butter&quot; above, I also have
          experience building web apps with Angular (with Angular Material) and
          React (with Next.js).
        </p>
      </ItemLayout>

      <ItemLayout
        className="lg:col-span-4"
        header="Back-end"
        body={
          <p>
            I have experience in back-end development, using either Java or
            JavaScript (with Nest.js). Before, I used to work with Java
            exclusively but now I&apos;m using JavaScript more.
            <br />
            <br />
            I&apos;ve also worked with both SQL and NoSQL databases such as
            MySQL and MongoDB, respectively. I&apos;ve also been experimenting
            with the concept of EventSourcing (via EventSourceDB) in my personal
            projects.
          </p>
        }
        iconSrc={ICON_API}
      />

      <ItemLayout
        className="lg:col-span-4 lg:col-start-3"
        header="DevOps"
        body={
          <p>
            Just recently, I&apos;ve started to expore DevOps by incorporating
            CI/CD into my personal projects via Docker and GitHub actions. I
            have also taken steps to create my own deployment set-up where I
            self-host my projects with my home servers.
            <br />
            <br />
            I&apos;m very excited about furthering my DevOps journey. My next
            milestone would be figuring out how to make continuous deployment
            work with my home servers.
          </p>
        }
        iconSrc={ICON_CICD}
      />
    </div>
  )
}
