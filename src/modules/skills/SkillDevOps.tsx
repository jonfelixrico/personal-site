import {
  ICON_CICD,
  ICON_DOCKER,
  ICON_DOCKER_COMPOSE,
  ICON_GITHUB_ACTIONS,
  ICON_PORTAINER,
} from '@/modules/common/icons'
import SkillLayout from '@/modules/skills/SkillLayout'
import SkillLayoutFooterItem from '@/modules/skills/SkillLayoutFooterItem'
import content from './SkillDevOps.md'
import Markdown from 'markdown-to-jsx'
import { Fragment } from 'react'

export default function SkillDevOps({ className }: { className?: string }) {
  return (
    <SkillLayout
      className={className}
      header="DevOps"
      iconSrc={ICON_CICD}
      footer={
        <>
          <SkillLayoutFooterItem
            title="Technologies"
            items={[
              {
                label: 'Docker',
                src: ICON_DOCKER,
              },
              {
                label: 'Docker Compose',
                src: ICON_DOCKER_COMPOSE,
              },
              {
                label: 'Portainer',
                src: ICON_PORTAINER,
              },
              {
                label: 'GitHub Actions',
                src: ICON_GITHUB_ACTIONS,
              },
            ]}
          />
        </>
      }
    >
      <Markdown>{content}</Markdown>
    </SkillLayout>
  )
}
