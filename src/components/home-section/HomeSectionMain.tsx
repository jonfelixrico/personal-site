import classnames from 'classnames'
import FakeElement from '@/components/fake-code/FakeElement'

export default function HomeSectionMain(props: { className?: string }) {
  return (
    <div
      className={classnames('flex flex-col justify-center', props.className)}
    >
      <div className="mb-10 text-8xl font-semibold">
        <div className="text-white">Jon Felix Rico,</div>
        <FakeElement className="text-primary font-mono" name="web-developer" />
      </div>

      <div className="w-5/6 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  )
}
