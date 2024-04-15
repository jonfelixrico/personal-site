import {
  ICON_ANGULAR,
  ICON_ANGULAR_MATERIAL,
  ICON_ANT_DESIGN,
  ICON_API,
  ICON_BOOTSTRAP,
  ICON_CHAKRA_UI,
  ICON_CICD,
  ICON_CYPRESS,
  ICON_DOCKER,
  ICON_EVENTSTOREDB,
  ICON_EXPRESS_JS,
  ICON_FRONTEND,
  ICON_GITHUB_ACTIONS,
  ICON_JAVA,
  ICON_JAVASCRIPT,
  ICON_JEST,
  ICON_JUNIT,
  ICON_LINUX,
  ICON_MONGODB,
  ICON_MYSQL,
  ICON_NEST_JS,
  ICON_NEXT_JS,
  ICON_NGINX,
  ICON_NODE_JS,
  ICON_POSTGRESQL,
  ICON_PROXMOX,
  ICON_QUASAR_FRAMEWORK,
  ICON_REACT,
  ICON_REDUX,
  ICON_SPRING_BOOT,
  ICON_TAILWIND_CSS,
  ICON_TYPESCRIPT,
  ICON_UBUNTU,
  ICON_VITE,
  ICON_VUE_JS,
  ICON_WEBPACK,
} from '@/modules/common/icons'
import SkillFooterItem from '@/modules/skills/SkillFooterItem'
import SkillLayout from '@/modules/skills/SkillLayout'

export default function ContentPrimaryTech() {
  return (
    <div className="grid lg:grid-cols-8 w-full gap-4">
      <SkillLayout
        className="lg:col-span-4"
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

      <SkillLayout
        className="lg:col-span-4"
        header="Back-end"
        iconSrc={ICON_API}
        footer={
          <>
            <SkillFooterItem
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

            <SkillFooterItem
              title="Databases"
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
              ]}
            />

            <SkillFooterItem
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
        <p>
          I have experience in back-end development, using either Java or
          JavaScript (with Nest.js). Before, I used to work with Java
          exclusively but now I&apos;m using JavaScript more.
          <br />
          <br />
          I&apos;ve also worked with both SQL and NoSQL databases such as MySQL
          and MongoDB, respectively. I&apos;ve also been experimenting with the
          concept of EventSourcing (via EventSourceDB) in my personal projects.
        </p>
      </SkillLayout>

      <SkillLayout
        className="lg:col-span-4 lg:col-start-3"
        header="DevOps"
        iconSrc={ICON_CICD}
        footer={
          <>
            <SkillFooterItem
              title="Technologies"
              items={[
                {
                  label: 'Docker',
                  src: ICON_DOCKER,
                },
                {
                  label: 'GitHub Actions',
                  src: ICON_GITHUB_ACTIONS,
                },
                {
                  label: 'Proxmox',
                  src: ICON_PROXMOX,
                },
                {
                  label: 'Ubuntu Server',
                  src: ICON_UBUNTU,
                },
                {
                  label: 'GNU/Linux',
                  src: ICON_LINUX,
                },
                {
                  label: 'NGINX',
                  src: ICON_NGINX,
                },
              ]}
            />
          </>
        }
      >
        <p>
          Just recently, I&apos;ve started to expore DevOps by incorporating
          CI/CD into my personal projects via Docker and GitHub actions. I have
          also taken steps to create my own deployment set-up where I self-host
          my projects with my home servers.
          <br />
          <br />
          I&apos;m very excited about furthering my DevOps journey. My next
          milestone would be figuring out how to make continuous deployment work
          with my home servers.
        </p>
      </SkillLayout>
    </div>
  )
}
