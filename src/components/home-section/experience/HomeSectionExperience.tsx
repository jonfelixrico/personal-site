import Card from '@/components/Card'
import { ReactNode } from 'react'
import TechStackItem, { Tech } from './TechStackItem'

function SubSectionLayout(props: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-semibold">{props.title}</div>
      <Card className="p-4 flex-grow">{props.children}</Card>
    </div>
  )
}

const BREAD_AND_BUTTER: Tech[] = [
  {
    iconSrc: 'tech-stack/quasar-framework.svg',
    name: 'Quasar Framework',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/vue-js.svg',
        name: 'Vue.js',
      },
      {
        iconSrc: 'tech-stack/typescript.svg',
        name: 'TypeScript',
      },
    ],
  },

  {
    iconSrc: 'tech-stack/nest-js.svg',
    name: 'Nest.js',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/express-js.svg',
        name: 'Express.js',
      },
      {
        iconSrc: 'tech-stack/typescript.svg',
        name: 'TypeScript',
      },
    ],
  },
]
const OTHERS: Tech[] = [
  {
    iconSrc: 'tech-stack/angular.svg',
    name: 'Angular',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/angular-material.svg',
        name: 'Angular Material',
      },
      {
        iconSrc: 'tech-stack/typescript.svg',
        name: 'TypeScript',
      },
    ],
  },
  {
    iconSrc: 'tech-stack/react.svg',
    name: 'React',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/next-js.svg',
        name: 'Next.js',
      },
      {
        iconSrc: 'tech-stack/tailwind-css.svg',
        name: 'TailwindCSS',
      },
      {
        iconSrc: 'tech-stack/typescript.svg',
        name: 'TypeScript',
      },
    ],
  },
  {
    iconSrc: 'tech-stack/spring-boot.svg',
    name: 'Spring Boot',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/java.svg',
        name: 'Next.js',
      },
    ],
  },
  {
    iconSrc: 'tech-stack/discord-js.svg',
    name: 'Discord.js',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    iconSrc: 'tech-stack/postgresql.svg',
    name: 'PostgreSQL',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    iconSrc: 'tech-stack/mongodb.svg',
    name: 'MongoDB',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    iconSrc: 'tech-stack/eventstoredb.svg',
    name: 'EventStoreDB',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
]

export default function HomeSectionExperience() {
  return (
    <div className="min-h-screen py-10">
      <div className="row-start-2 row-span-4">
        <div className="mb-5">
          <div className="text-5xl font-semibold mb-2">Experience</div>
          <div>Lorem ipsum dolor.</div>
        </div>

        <div className="mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </div>

        <div className="mb-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </div>

        <div className="grid grid-cols-2 gap-5">
          <SubSectionLayout title="The bread and butter">
            <div className="flex flex-col gap-3">
              {BREAD_AND_BUTTER.map((data) => TechStackItem({ tech: data }))}
            </div>
          </SubSectionLayout>
          <SubSectionLayout title="Other fun stuff that I've played with">
            <div className="flex flex-col gap-3">
              {OTHERS.map((data) => TechStackItem({ tech: data }))}
            </div>
          </SubSectionLayout>
        </div>
      </div>
    </div>
  )
}
