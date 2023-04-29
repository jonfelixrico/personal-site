import ContentPrimaryTech from '../experience/ContentPrimaryTech'

export default function HomeSectionExperience() {
  return (
    <div className="pt-10 min-h-screen">
      <div className="py-10">
        <div className="mx-auto max-w-screen-lg section-px">
          <div className="mb-5">
            <h2 className="text-5xl font-semibold text-primary">Skills</h2>
            <div className="text-secondary text-2xl">Lorem ipsum dolor</div>
          </div>

          <ContentPrimaryTech />
        </div>
      </div>
    </div>
  )
}
