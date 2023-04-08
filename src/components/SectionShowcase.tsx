import ShowcaseItemLayout from '@components/showcase-item/ShowcaseItemLayout'

export default function SectionShowcase() {
  return (
    <div className="min-h-screen mt-14">
      <div className="mb-5 flex flex-row items-center">
        <div className="font-sans text-4xl font-semibold mr-5">Showcase</div>
        <div className="border-b flex-grow" />
      </div>

      <div className="font-mono mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </div>

      <div className="grid grid-cols-1 gap-3">
        <ShowcaseItemLayout
          details={<div>Test</div>}
          preview={<div className="bg-gray-500 h-96 w-1/2" />}
          previewPosition="left"
        />

        <ShowcaseItemLayout
          details={<div>Test</div>}
          preview={<div className="bg-gray-500 h-80 w-full" />}
          previewPosition="right"
        />

        <ShowcaseItemLayout
          details={<div>Test</div>}
          preview={<div className="bg-gray-500 h-80 w-full" />}
          previewPosition="left"
        />
      </div>
    </div>
  )
}
