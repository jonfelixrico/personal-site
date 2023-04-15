import classnames from 'classnames'
import ContentPrimaryTech from './ContentPrimaryTech'

import ContentSecondaryTech from './ContentSecondaryTech'

function HeaderAndDescription(props: { className?: string }) {
  return (
    <div className={classnames('row-start-2 row-span-4', props.className)}>
      <div className="mb-5">
        <h2 className="text-5xl font-semibold text-primary">Experience</h2>
        <div className="text-secondary text-2xl">Lorem ipsum dolor</div>
      </div>

      <div className="mb-10 text-xl">
        <span>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </span>
        <br />
        <br />
        <span>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </span>
      </div>
    </div>
  )
}

export default function HomeSectionExperience(props: { className?: string }) {
  return (
    <div className={classnames('py-10 min-h-screen', props.className)}>
      <HeaderAndDescription className="mx-auto max-w-screen-lg px-5" />

      <div className="bg-card py-8">
        <div className="mx-auto max-w-screen-lg px-5 mb-10">
          <h3 className="text-center text-4xl text-accent mb-5">
            The bread and butter
          </h3>

          <ContentPrimaryTech />
        </div>
      </div>
    </div>
  )
}
