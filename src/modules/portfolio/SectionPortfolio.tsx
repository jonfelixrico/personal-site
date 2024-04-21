import Link from 'next/link'
import { Section } from '@/modules/layout/section.enum'
import { FeaturedProject } from '@/modules/portfolio/FeaturedProject'
import projects from './data'
import FadeInOnVisible from '@/modules/common/FadeInOnVisible'

export default function SectionPortfolio() {
  return (
    <div className="bg-app-2 pt-10">
      <div className="section-width min-h-screen section-px py-10">
        <div className="row-start-2 row-span-4">
          <div className="mb-5">
            <h2 className="text-5xl font-semibold text-primary">
              <Link
                href={{
                  hash: Section.PORTFOLIO,
                }}
              >
                Portfolio
              </Link>
            </h2>
            <div className="text-secondary text-2xl">
              Things that I&apos;ve been up to recently
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {projects.map((props, key) => (
              <FadeInOnVisible key={key}>
                <FeaturedProject {...props} />
              </FadeInOnVisible>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
