export default function HomeSectionMain() {
  return (
    <div
      className="h-screen
      flex flex-col justify-center
      bg-app-2"
    >
      <div className="section-width section-px">
        <div className="mb-10 font-semibold">
          <div
            className="
            text-white
            text-6xl sm:text-7xl md:text-8xl "
          >
            Jon Felix Rico,
          </div>
          <div
            className="
            text-primary font-mono
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            &lt;web-developer /&gt;
          </div>
        </div>

        <div className="lg:w-5/6 text-xl">
          I&apos;m a web developer specializing in front-end technologies
          for&nbsp;
          <a target="_blank" href="https://www.azeus.com">
            Azeus Systems
          </a>
          . During my downtime, I like building full-stack apps as my pet
          project or tinkering with tech.
        </div>
      </div>
    </div>
  )
}
