import ContentPrimaryTech from './ContentPrimaryTech'

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

          <ContentPrimaryTech />
        </div>
      </div>
    </div>
  )
}
