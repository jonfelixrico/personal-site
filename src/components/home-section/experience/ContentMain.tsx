import IconWithTooltip from '@/components/IconWithTooltip'
import classnames from 'classnames'
import { ReactNode } from 'react'

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
        <IconWithTooltip
          className="lg:h-20 lg:w-20 md:h-14 md:w-14 h-12 w-12"
          key={index}
          tooltipLabel={label}
          src={src}
        />
      ))}
    </div>
  )
}

export default function ContentMain() {
  return (
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
  )
}
