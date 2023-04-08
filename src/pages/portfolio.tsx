import Head from 'next/head'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Portfolio</title>
      </Head>

      <main>
        <div className="mx-auto max-w-screen-lg mt-10">
          <div className="mb-5 flex flex-row items-center">
            <div className="font-sans text-4xl font-semibold mr-5">
              Some of my work
            </div>
            <div className="border-b flex-grow" />
          </div>
        </div>
      </main>
    </>
  )
}
