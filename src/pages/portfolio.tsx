import Head from 'next/head'
import PortfolioList from '@/components/portfolio/PortfolioList'
import FakeElement from '@/components/fake-code/FakeElement'

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
              &#47;&#47; lorem ipsum dolor
            </div>
          </div>

          <PortfolioList />
        </div>
      </div>
    </>
  )
}
