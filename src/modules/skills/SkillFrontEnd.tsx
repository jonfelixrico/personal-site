import {
  ICON_ANGULAR,
  ICON_ANGULAR_MATERIAL,
  ICON_ANT_DESIGN,
  ICON_BOOTSTRAP,
  ICON_CHAKRA_UI,
  ICON_CYPRESS,
  ICON_FRONTEND,
  ICON_JAVASCRIPT,
  ICON_JEST,
  ICON_NEXT_JS,
  ICON_QUASAR_FRAMEWORK,
  ICON_REACT,
  ICON_REDUX,
  ICON_TAILWIND_CSS,
  ICON_TYPESCRIPT,
  ICON_VITE,
  ICON_VUE_JS,
  ICON_WEBPACK,
} from '@/modules/common/icons'
import SkillLayoutFooterItem from '@/modules/skills/SkillLayoutFooterItem'
import SkillLayout from '@/modules/skills/SkillLayout'
import content from './SkillFrontEnd.md'
import Markdown from 'markdown-to-jsx'
import { Fragment } from 'react'

export default function SkillFrontEnd({ className }: { className: string }) {
  return (
    <SkillLayout
      className={className}
      header="Front-end"
      iconSrc={ICON_FRONTEND}
      footer={
        <>
          <SkillLayoutFooterItem
            title="Frameworks"
            items={[
              {
                label: 'React',
                src: ICON_REACT,
              },
              {
                label: 'Vue.js',
                src: ICON_VUE_JS,
              },
              {
                label: 'Angular',
                src: ICON_ANGULAR,
              },
              {
                label: 'Next.js',
                src: ICON_NEXT_JS,
              },
              {
                label: 'Quasar',
                src: ICON_QUASAR_FRAMEWORK,
              },
            ]}
          />

          <SkillLayoutFooterItem
            title="UI Libraries"
            items={[
              {
                label: 'TailwindCSS',
                src: ICON_TAILWIND_CSS,
              },
              {
                label: 'Angular Material',
                src: ICON_ANGULAR_MATERIAL,
              },
              {
                label: 'Bootstrap',
                src: ICON_BOOTSTRAP,
              },
              {
                label: 'Chakra UI',
                src: ICON_CHAKRA_UI,
              },
              {
                label: 'Ant Design',
                src: ICON_ANT_DESIGN,
              },
            ]}
          />

          <SkillLayoutFooterItem
            title="Tools and Languages"
            items={[
              {
                label: 'Webpack',
                src: ICON_WEBPACK,
              },
              {
                label: 'Vite',
                src: ICON_VITE,
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
                label: 'Jest',
                src: ICON_JEST,
              },
              {
                label: 'Cypress',
                src: ICON_CYPRESS,
              },
              {
                label: 'Redux',
                src: ICON_REDUX,
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
