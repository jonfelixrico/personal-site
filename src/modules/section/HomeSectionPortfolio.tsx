import PortfolioList from '@/modules/portfolio/PortfolioList'

export default function HomeSectionPortfolio() {
  return (
    <div className="bg-app-2 pt-10">
      <div className="section-width min-h-screen section-px py-10">
        <div className="row-start-2 row-span-4">
          <div className="mb-5">
            <div className="text-5xl font-semibold text-primary">Portfolio</div>
            <div className="text-secondary text-2xl">
              Things that I&apos;ve been up to recently
            </div>
          </div>

          <PortfolioList />
        </div>
      </div>
    </div>
  )
}
