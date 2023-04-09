import Card from '@/components/Card'

export default function HomeSectionExperience() {
  return (
    <div className="h-screen py-10">
      <div className="row-start-2 row-span-4">
        <div className="mb-5">
          <div className="text-5xl font-semibold mb-2">Experience</div>
          <div>Lorem ipsum dolor.</div>
        </div>

        <div className="mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </div>

        <div className="mb-5">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="text-2xl font-semibold mb-3">
              The bread and butter
            </div>
            <Card className="p-2">Test</Card>
          </div>

          <div>
            <div className="text-2xl font-semibold mb-3">
              Other toys I&apos;ve played with
            </div>

            <Card className="p-2">Test</Card>
          </div>
        </div>
      </div>
    </div>
  )
}
