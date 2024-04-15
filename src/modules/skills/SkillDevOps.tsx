import {
  ICON_CICD,
  ICON_DOCKER,
  ICON_GITHUB_ACTIONS,
  ICON_LINUX,
  ICON_NGINX,
  ICON_PROXMOX,
  ICON_UBUNTU,
} from '@/modules/common/icons'
import SkillLayout from '@/modules/skills/SkillLayout'
import SkillLayoutFooterItem from '@/modules/skills/SkillLayoutFooterItem'

export default function SkillDevOps({ className }: { className: string }) {
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
        Just recently, I&apos;ve started to expore DevOps by incorporating CI/CD
        into my personal projects via Docker and GitHub actions. I have also
        taken steps to create my own deployment set-up where I self-host my
        projects with my home servers.
        <br />
        <br />
        I&apos;m very excited about furthering my DevOps journey. My next
        milestone would be figuring out how to make continuous deployment work
        with my home servers.
      </p>
    </SkillLayout>
  )
}
