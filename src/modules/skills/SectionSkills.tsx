import SkillFrontEnd from '@/modules/skills/SkillFrontEnd'
import SkillBackEnd from '@/modules/skills/SkillBackEnd'
import SkillDevOps from '@/modules/skills/SkillDevOps'
import SkillSysAd from '@/modules/skills/SkillSysAd'

export default function SectionSkills() {
  return (
    <div className="pt-10 min-h-screen">
      <div className="py-10">
        <div className="section-width section-px">
          <div className="mb-5">
            <h2 className="text-5xl font-semibold text-primary">Skills</h2>
            <div className="text-secondary text-2xl">
              What I&apos;ve cultivated so far
            </div>
          </div>

          <div className="grid lg:grid-cols-8 w-full gap-4">
            <SkillFrontEnd className="lg:col-span-4" />

            <SkillBackEnd className="lg:col-span-4" />

            <SkillDevOps className="lg:col-span-4" />

            <SkillSysAd className="lg:col-span-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
