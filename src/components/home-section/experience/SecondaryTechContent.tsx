import IconWithTooltip from '@/components/IconWithTooltip'

interface Icon {
  src: string
  label: string
}

const ICONS: Icon[] = [
  {
    src: 'icons/react.svg',
    label: 'React',
  },
  {
    src: 'icons/next-js.svg',
    label: 'Next.js',
  },
  {
    src: 'icons/tailwind-css.svg',
    label: 'TailwindCSS',
  },
  {
    src: 'icons/angular.svg',
    label: 'Angular',
  },
  {
    src: 'icons/express-js.svg',
    label: 'Express.js',
  },
  {
    src: 'icons/node-js.svg',
    label: 'NodeJS',
  },
  {
    src: 'icons/typescript.svg',
    label: 'TypeScript',
  },
  {
    src: 'icons/spring-boot.svg',
    label: 'Spring Boot',
  },
  {
    src: 'icons/eventstoredb.svg',
    label: 'EventStoreDB',
  },
  {
    src: 'icons/mysql.svg',
    label: 'MySQL',
  },
  {
    src: 'icons/java.svg',
    label: 'Java',
  },
  {
    src: 'icons/pocketbase.svg',
    label: 'PocketBase',
  },
  {
    src: 'icons/nginx.svg',
    label: 'NGINX',
  },
  {
    src: 'icons/discord-js.svg',
    label: 'Discord.js',
  },
]

export default function SecondaryTechContent() {
  return (
    <div className="flex flex-row flex-wrap gap-6">
      {ICONS.map(({ src, label }, index) => (
        <IconWithTooltip
          key={index}
          src={src}
          tooltipLabel={label}
          className="lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16 h-12 w-12"
        />
      ))}
    </div>
  )
}
