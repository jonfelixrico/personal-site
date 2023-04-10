import Head from 'next/head'
import FakeElement from '@/components/fake-code/FakeElement'
import { FakeComment } from '@/components/fake-code/FakeComment'
import PortfolioListV2 from '@/components/portfolio/PortfolioListV2'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Portfolio</title>
      </Head>

      <div className="min-h-screen">
        <div className="mx-auto max-w-screen-lg py-10">
          <div className="mb-10">
            <FakeElement
              className="font-mono text-5xl font-semibold text-primary"
              name="portfolio"
            />
            <div className="font-mono text-secondary text-2xl">
              <FakeComment>lorem ipsum dolor</FakeComment>
            </div>
          </div>

          <PortfolioListV2 />
        </div>
      </div>
    </>
  )
}
