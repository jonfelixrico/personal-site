export function ShowcaseSection() {
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

      <div className="gap-5 grid grid-cols-auto">
        <div className="bg-gray-500 h-80"></div>
        <div className="bg-gray-500 h-80"></div>
        <div className="bg-gray-500 h-80"></div>
        <div className="bg-gray-500 h-80"></div>
      </div>
    </div>
  )
}
