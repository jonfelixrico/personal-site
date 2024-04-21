import SkillFrontEnd from '@/modules/skills/SkillFrontEnd'
import SkillBackEnd from '@/modules/skills/SkillBackEnd'
import SkillDevOps from '@/modules/skills/SkillDevOps'
import SkillSysAd from '@/modules/skills/SkillSysAd'
import Link from 'next/link'
import { Section } from '@/modules/layout/section.enum'
import { TechIconCarousel } from '@/modules/skills/TechIconCarousel'
import FadeInOnVisible from '@/modules/common/FadeInOnVisible'

export default function SectionSkills() {
  return (
    <div className="pt-10 min-h-screen flex flex-col">
      <div className="py-10 flex-auto">
        <div className="section-width section-px">
          <div className="mb-5">
            <h2 className="text-5xl font-semibold text-primary">
              <Link
                href={{
                  hash: Section.SKILLS,
                }}
              >
                Skills
              </Link>
            </h2>
            <div className="text-secondary text-2xl">
              What I&apos;ve cultivated so far
            </div>
          </div>

          <div className="grid lg:grid-cols-8 w-full gap-4">
            <FadeInOnVisible className="lg:col-span-4">
              <SkillFrontEnd className="h-full" />
            </FadeInOnVisible>

            <FadeInOnVisible className="lg:col-span-4">
              <SkillBackEnd className="h-full" />
            </FadeInOnVisible>

            <FadeInOnVisible className="lg:col-span-4">
              <SkillDevOps className="h-full" />
            </FadeInOnVisible>

            <FadeInOnVisible className="lg:col-span-4">
              <SkillSysAd className="h-full" />
            </FadeInOnVisible>
          </div>
        </div>
      </div>

      <div className="flex-none bg-app-3">
        <TechIconCarousel />
      </div>
    </div>
  )
}
