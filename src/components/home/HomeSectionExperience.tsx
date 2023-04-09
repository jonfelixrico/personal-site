export default function HomeSectionExperience() {
  return (
    <div className="h-screen grid grid-rows-6">
      <div className="row-start-2 row-span-4">
        <div className="mb-5">
          <div className="text-5xl font-semibold mb-2">Experience</div>
          <div>Lorem ipsum dolor.</div>
        </div>

        <div className="font-mono mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </div>

        <div className="font-mono mb-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </div>

        <div className="text-xl font-sans font-semibold mb-3">
          Some of the tech I have worked with:
        </div>

        <div className="grid grid-cols-3 gap-3">
          {/* todo add tech stack here */}
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
          <div className="border">test</div>
        </div>
      </div>
    </div>
  )
}
