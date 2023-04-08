import { ReactNode } from 'react'
import PortfolioCard from './PortfolioCard'

function DetailsSection(props: {
  header: string
  techStack: string[]
  descriptionSlot: ReactNode
}) {
  return (
    <div className="p-3 flex flex-col h-full">
      <div className="flex-grow">
        <div className="font-sans text-xl">{props.header}</div>
        <div className="mt-2 text-mono">{props.descriptionSlot}</div>
      </div>

      <div className="font-mono pt-5 text-xs">
        {props.techStack.join(' • ')}
      </div>
    </div>
  )
}

export default function PortfolioList() {
  return (
    <div className="grid grid-cols-1 grid-rows-auto gap-3">
      <PortfolioCard
        preview={<div className="bg-gray-500 h-80"></div>}
        details={DetailsSection({
          header: 'Test Header',
          techStack: ['tech1', 'tech2', 'tech3'],
          descriptionSlot: (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          ),
        })}
      />

      <PortfolioCard
        preview={<div className="bg-gray-500 h-80"></div>}
        details={DetailsSection({
          header: 'Test Header',
          techStack: ['tech1', 'tech2', 'tech3'],
          descriptionSlot: (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          ),
        })}
      />

      <PortfolioCard
        preview={<div className="bg-gray-500 h-80"></div>}
        details={DetailsSection({
          header: 'Test Header',
          techStack: ['tech1', 'tech2', 'tech3'],
          descriptionSlot: (
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          ),
        })}
      />
    </div>
  )
}
