import projects from '@/models/projects'
import { FeaturedProject } from './FeaturedProject'

export default function PortfolioList() {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((props, key) => (
        <FeaturedProject {...props} key={key} />
      ))}
    </div>
  )
}
