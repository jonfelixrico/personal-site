import TechStackItem from './TechStackItem'

function ItemVue() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/quasar-framework.svg',
      name: 'Quasar Framework',
    },
    {
      iconSrc: 'tech-stack/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/vue-js.svg"
      name="Vue.js"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemNestJs() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/express-js.svg',
      name: 'Express.js',
      iconClass: 'invert',
    },
    {
      iconSrc: 'tech-stack/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/nest-js.svg"
      name="Nest.js"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemMongoDb() {
  return (
    <TechStackItem
      iconSrc="tech-stack/mongodb.svg"
      name="MongoDB"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemRelationalDatabases() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      iconSrc: 'tech-stack/mysql.svg',
      name: 'MySQL',
      iconClass: 'invert',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/database.svg"
      name="Relational Databases"
      items={ITEMS}
      iconClass="invert"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

export default function PrimaryTechStack() {
  return (
    <div className="flex flex-col gap-4">
      <ItemVue />
      <ItemNestJs />
      <ItemMongoDb />
      <ItemRelationalDatabases />
    </div>
  )
}
