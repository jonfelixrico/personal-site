import FeaturedMarites from './featured/FeaturedMarites'
import FeaturedWisdom from './featured/FeaturedWisdom'

export default function PortfolioList() {
  return (
    <div className="flex flex-col gap-10">
      <FeaturedWisdom />
      <FeaturedMarites />
    </div>
  )
}
