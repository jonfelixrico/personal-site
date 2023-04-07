export function AboutMeSection() {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-6">
      <div className="row-start-2 row-span-4">
        <div className="mb-5 flex flex-row items-center">
          <div className="font-sans text-4xl font-semibold mr-5">About Me</div>
          <div className="border-b flex-grow" />
        </div>

        <div className="font-mono mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </div>
      </div>
    </div>
  )
}
