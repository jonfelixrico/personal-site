import {
  ICON_API,
  ICON_EVENTSTOREDB,
  ICON_EXPRESS_JS,
  ICON_JAVA,
  ICON_JAVASCRIPT,
  ICON_JEST,
  ICON_JUNIT,
  ICON_MONGODB,
  ICON_MYSQL,
  ICON_NEST_JS,
  ICON_NODE_JS,
  ICON_POSTGRESQL,
  ICON_SPRING_BOOT,
  ICON_SPRING_DATA_JPA,
  ICON_TYPEORM,
  ICON_TYPESCRIPT,
} from '@/modules/common/icons'
import SkillLayout from '@/modules/skills/SkillLayout'
import SkillLayoutFooterItem from '@/modules/skills/SkillLayoutFooterItem'
import Markdown from 'markdown-to-jsx'
import { Fragment } from 'react'
import content from './SkillBackEnd.md'

export default function SkillBackEnd({ className }: { className: string }) {
  return (
    <SkillLayout
      className={className}
      header="Back-end"
      iconSrc={ICON_API}
      footer={
        <>
          <SkillLayoutFooterItem
            title="Server Technologies"
            items={[
              {
                label: 'Spring Boot',
                src: ICON_SPRING_BOOT,
              },
              {
                label: 'NestJS',
                src: ICON_NEST_JS,
              },
              {
                label: 'Node.js',
                src: ICON_NODE_JS,
              },
              {
                label: 'Express.js',
                src: ICON_EXPRESS_JS,
              },
            ]}
          />

          <SkillLayoutFooterItem
            title="Databases and ORMs"
            items={[
              {
                label: 'PostgreSQL',
                src: ICON_POSTGRESQL,
              },
              {
                label: 'MongoDB',
                src: ICON_MONGODB,
              },
              {
                label: 'MySQL',
                src: ICON_MYSQL,
              },
              {
                label: 'EventStoreDB',
                src: ICON_EVENTSTOREDB,
              },
              {
                label: 'TypeORM',
                src: ICON_TYPEORM,
              },
              {
                label: 'Spring Data JPA',
                src: ICON_SPRING_DATA_JPA,
              },
            ]}
          />

          <SkillLayoutFooterItem
            title="Tools and Languages"
            items={[
              {
                label: 'Java',
                src: ICON_JAVA,
              },
              {
                label: 'TypeScript',
                src: ICON_TYPESCRIPT,
              },
              {
                label: 'JavaScript',
                src: ICON_JAVASCRIPT,
              },
              {
                label: 'JUnit',
                src: ICON_JUNIT,
              },
              {
                label: 'Jest',
                src: ICON_JEST,
              },
            ]}
          />
        </>
      }
    >
      <div className="markdown">
        <Markdown
          options={{
            wrapper: Fragment,
          }}
        >
          {content}
        </Markdown>
      </div>
    </SkillLayout>
  )
}
