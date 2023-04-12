import TechStackItem from './TechStackItem'

function ItemVue() {
  const ITEMS = [
    {
      iconSrc: 'icons/quasar-framework.svg',
      name: 'Quasar Framework',
    },
    {
      iconSrc: 'icons/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/vue-js.svg"
      name="Vue.js"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemNestJs() {
  const ITEMS = [
    {
      iconSrc: 'icons/express-js.svg',
      name: 'Express.js',
      iconClass: 'invert',
    },
    {
      iconSrc: 'icons/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/nest-js.svg"
      name="Nest.js"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemMongoDb() {
  return (
    <TechStackItem
      iconSrc="icons/mongodb.svg"
      name="MongoDB"
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
    </div>
  )
}
