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
import SkillFooterItem from '@/modules/skills/SkillFooterItem'
import SkillLayout from '@/modules/skills/SkillLayout'

export default function SkillFrontEnd({ className }: { className: string }) {
  return (
    <SkillLayout
      className={className}
      header="Front-end"
      iconSrc={ICON_FRONTEND}
      footer={
        <>
          <SkillFooterItem
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

          <SkillFooterItem
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

          <SkillFooterItem
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
      <p>
        I have been working with Vue.js (under the Quasar Framework) for more
        than three years. I have built complex and interactive user interfaces
        with this front-end stack. It is my go-to whenever I want to work on a
        personal project.
        <br />
        <br />
        In addition to my &quot;bread and butter&quot; above, I also have
        experience building web apps with Angular (with Angular Material) and
        React (with Next.js).
      </p>
    </SkillLayout>
  )
}
