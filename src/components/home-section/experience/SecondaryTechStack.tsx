import TechStackItem, { Tech } from './TechStackItem'

const ITEMS: Tech[] = [
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
    iconSrc: 'tech-stack/eventstoredb.svg',
    name: 'EventStoreDB',
    testimony:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
]

export default function SecondaryTechStack() {
  return (
    <div className="flex flex-col gap-3">
      {ITEMS.map((data) => TechStackItem({ tech: data }))}
    </div>
  )
}
