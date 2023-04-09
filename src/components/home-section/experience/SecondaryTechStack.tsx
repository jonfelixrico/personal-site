import { createElement, useState } from 'react'
import TechStackItem, { TechStackItemProps } from './TechStackItem'

function ItemAngular() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/angular-material.svg',
      name: 'Angular Material',
    },
    {
      iconSrc: 'tech-stack/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/angular.svg"
      name="Angular"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemReact() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/next-js.svg',
      name: 'Next.js',
    },
    {
      iconSrc: 'tech-stack/tailwind-css.svg',
      name: 'Tailwind CSS',
    },
    {
      iconSrc: 'tech-stack/typescript.svg',
      name: 'TypeScript',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/react.svg"
      name="React"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemSpringBoot() {
  const ITEMS = [
    {
      iconSrc: 'tech-stack/java.svg',
      name: 'Java',
    },
  ]

  return (
    <TechStackItem
      iconSrc="tech-stack/spring-boot.svg"
      name="Spring Boot"
      items={ITEMS}
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemDocker() {
  return (
    <TechStackItem
      iconSrc="tech-stack/docker.svg"
      name="Docker"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemDiscordJs() {
  return (
    <TechStackItem
      iconSrc="tech-stack/discord-js.svg"
      name="Discord.js"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemEventStoreDb() {
  return (
    <TechStackItem
      iconSrc="tech-stack/eventstoredb.svg"
      name="EventStoreDB"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

function ItemGithubActions() {
  return (
    <TechStackItem
      iconSrc="tech-stack/github-actions.svg"
      name="Github Actions"
      testimony="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
  )
}

const TECH_ITEMS = [
  ItemAngular,
  ItemReact,
  ItemSpringBoot,
  ItemDocker,
  ItemDiscordJs,
  ItemEventStoreDb,
  ItemGithubActions,
]

function DynamicComponent(props: { is: () => JSX.Element }) {
  return createElement(props.is)
}

const COLLAPSED_ITEM_COUNT = 4
export default function SecondaryTechStack() {
  const [isExpanded, setExpanded] = useState(false)
  return (
    <div className="flex flex-col gap-4">
      {TECH_ITEMS.slice(0, isExpanded ? undefined : COLLAPSED_ITEM_COUNT).map(
        (component, index) => (
          <DynamicComponent is={component} key={index} />
        )
      )}

      <div className="flex flex-row justify-center">
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
