import PortfolioList from '../portfolio/PortfolioList'

export default function HomeSectionPortfolio() {
  return (
    <div className="mx-auto max-w-screen-lg min-h-screen section-px">
      <div className="row-start-2 row-span-4">
        <div className="mb-5">
          <div className="text-5xl font-semibold text-primary">Portfolio</div>
          <div className="text-secondary text-2xl">Lorem ipsum dolor</div>
        </div>

        <PortfolioList />
      </div>
    </div>
  )
}
