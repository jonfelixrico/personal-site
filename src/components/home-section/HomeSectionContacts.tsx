import classnames from 'classnames'
import FakeElement from '@/components/FakeElement'

export default function HomeSectionContacts(props: { className?: string }) {
  return (
    <div className={classnames('grid grid-rows-6', props.className)}>
      <div className="row-start-2 row-span-4">
        <div className="mb-5">
          <FakeElement
            className="font-mono text-5xl font-semibold text-primary"
            name="contacts"
          />
          <div className="font-mono text-secondary text-2xl">
            &#47;&#47; lorem ipsum dolor
          </div>
        </div>

        <div className="mb-5 text-xl">
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
