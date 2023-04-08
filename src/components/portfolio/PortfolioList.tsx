import PortfolioCard from './PortfolioCard'

export default function PortfolioList() {
  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-3">
      <PortfolioCard
        preview={<div className="bg-gray-500 h-40"></div>}
        details={<div />}
      />

      <PortfolioCard
        preview={<div className="bg-gray-500 h-40"></div>}
        details={<div />}
        reverse
      />
    </div>
  )
}
