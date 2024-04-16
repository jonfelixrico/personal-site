import {
  ICON_CLOUDFLARE,
  ICON_DIGITAL_OCEAN,
  ICON_NGINX,
  ICON_OPNSENSE,
  ICON_PROXMOX,
  ICON_SYSAD,
  ICON_UBUNTU,
} from '@/modules/common/icons'
import SkillLayout from '@/modules/skills/SkillLayout'
import SkillLayoutFooterItem from '@/modules/skills/SkillLayoutFooterItem'
import content from './SkillSysAd.md'
import Markdown from 'markdown-to-jsx'
import { Fragment } from 'react'

export default function SkillSysAd({ className }: { className: string }) {
  return (
    <SkillLayout
      className={className}
      header="System Administration"
      iconSrc={ICON_SYSAD}
      footer={
        <>
          <SkillLayoutFooterItem
            title="Technologies"
            items={[
              {
                label: 'Proxmox',
                src: ICON_PROXMOX,
              },
              {
                label: 'Ubuntu Server',
                src: ICON_UBUNTU,
              },
              {
                label: 'NGINX',
                src: ICON_NGINX,
              },
              {
                label: 'OPNsense',
                src: ICON_OPNSENSE,
              },
            ]}
          />
          <SkillLayoutFooterItem
            title="Cloud Services"
            items={[
              {
                label: 'DigitalOcean',
                src: ICON_DIGITAL_OCEAN,
              },
              {
                label: 'Cloudflare',
                src: ICON_CLOUDFLARE,
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
