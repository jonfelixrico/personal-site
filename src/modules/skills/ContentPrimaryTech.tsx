import SkillFrontEnd from '@/modules/skills/SkillFrontEnd'
import SkillBackEnd from '@/modules/skills/SkillBackEnd'
import SkillDevOps from '@/modules/skills/SkillDevOps'

export default function ContentPrimaryTech() {
  return (
    <div className="grid lg:grid-cols-8 w-full gap-4">
      <SkillFrontEnd className="lg:col-span-4" />

      <SkillBackEnd className="lg:col-span-4" />

      <SkillDevOps className="lg:col-span-4 lg:col-start-3" />
    </div>
  )
}
