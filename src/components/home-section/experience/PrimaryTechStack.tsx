import TechStackItem, { TechStackItemProps } from './TechStackItem'

const ITEMS: TechStackItemProps[] = [
  {
    iconSrc: 'tech-stack/vue-js.svg',
    name: 'Vue.js',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/quasar-framework.svg',
        name: 'Quasar Framework',
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
  {
    iconSrc: 'tech-stack/mongodb.svg',
    name: 'MongoDB',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    iconSrc: 'tech-stack/database.svg',
    name: 'Relational Databases',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    items: [
      {
        iconSrc: 'tech-stack/postgresql.svg',
        name: 'PostgreSQL',
      },
      {
        iconSrc: 'tech-stack/mysql.svg',
        name: 'MySQL',
      },
    ],
  },
]

export default function PrimaryTechStack() {
  return (
    <div className="flex flex-col gap-4">
      {ITEMS.map((data) => (
        <TechStackItem tech={data} key={data.name} />
      ))}
    </div>
  )
}
