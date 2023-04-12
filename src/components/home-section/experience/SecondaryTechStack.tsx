import { createElement, useState } from 'react'
import TechStackItem from './TechStackItem'

function ItemAngular() {
  const ITEMS = [
    {
      iconSrc: 'icons/angular-material.svg',
      name: 'Angular Material',
    },
    {
      iconSrc: 'icons/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/angular.svg"
      name="Angular"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemReact() {
  const ITEMS = [
    {
      iconSrc: 'icons/next-js.svg',
      name: 'Next.js',
      iconClass: 'invert',
    },
    {
      iconSrc: 'icons/tailwind-css.svg',
      name: 'Tailwind CSS',
    },
    {
      iconSrc: 'icons/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/react.svg"
      name="React"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemSpringBoot() {
  const ITEMS = [
    {
      iconSrc: 'icons/java.svg',
      name: 'Java',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/spring-boot.svg"
      name="Spring Boot"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemDocker() {
  return (
    <TechStackItem
      iconSrc="icons/docker.svg"
      name="Docker"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemEventStoreDb() {
  return (
    <TechStackItem
      iconSrc="icons/eventstoredb.svg"
      name="EventStoreDB"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemGithubActions() {
  return (
    <TechStackItem
      iconSrc="icons/github-actions.svg"
      name="Github Actions"
      iconClass="invert"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemRelationalDatabases() {
  const ITEMS = [
    {
      iconSrc: 'icons/postgresql.svg',
      name: 'PostgreSQL',
    },
    {
      iconSrc: 'icons/mysql.svg',
      name: 'MySQL',
      iconClass: 'invert',
    },
  ]

  return (
    <TechStackItem
      iconSrc="icons/database.svg"
      name="Relational Databases"
      items={ITEMS}
      iconClass="invert"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

const TECH_ITEMS = [
  ItemRelationalDatabases,
  ItemSpringBoot,
  ItemDocker,
  ItemReact,
  ItemAngular,
  ItemEventStoreDb,
  ItemGithubActions,
]

const COLLAPSED_ITEM_COUNT = 3
export default function SecondaryTechStack() {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      {TECH_ITEMS.slice(0, isExpanded ? undefined : COLLAPSED_ITEM_COUNT).map(
        (component, index) =>
          createElement(component, {
            key: index,
          })
      )}

      <div className="flex flex-row justify-center text-accent">
        <div
          className="cursor-pointer"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Show more...'}
        </div>
      </div>
    </div>
  )
}
