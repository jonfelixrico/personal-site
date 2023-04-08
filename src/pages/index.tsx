import HomeSectionAboutMe from '@/components/home/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home/HomeSectionContacts'
import HomeSectionExperience from '@/components/home/HomeSectionExperience'
import HomeSectionMain from '@/components/home/HomeSectionMain'
import ReactFullpage from '@fullpage/react-fullpage'

export default function Home() {
  return (
    <main>
      <ReactFullpage
        credits={{}}
        scrollingSpeed={250}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomeSectionMain />
              </div>
              <div className="section">
                <HomeSectionAboutMe />
              </div>
              <div className="section">
                <HomeSectionExperience />
              </div>
              <div className="section">
                <HomeSectionContacts />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </main>
  )
}
