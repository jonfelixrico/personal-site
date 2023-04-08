import Head from 'next/head'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Portfolio</title>
      </Head>

      <main className="h-screen pt-10">
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-5 flex flex-row items-center">
            <div className="font-sans text-4xl font-semibold mr-5">
              Some of my work
            </div>
            <div className="border-b flex-grow" />
          </div>

          <div className="grid grid-cols-2 grid-rows-auto gap-3">
            <div className="bg-gray-500 h-40"></div>
            <div className="bg-gray-500 h-10"></div>
            <div className="bg-gray-500 h-40"></div>
            <div className="bg-gray-500 h-40"></div>
          </div>
        </div>
      </main>
    </>
  )
}
