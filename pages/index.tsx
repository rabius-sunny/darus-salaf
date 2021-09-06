import Header from '../components/Header'
import 'tailwindcss/tailwind.css'
import Featured from '../components/Featured'
import JoinUs from '../components/JoinUs'
import Working from '../components/Working'
import Contact from '../components/Contact'
import Adviser from '../components/Adviser'
import Projects from '../components/Projects'
import Members from '../components/Members'

export default function IndexPage() {
  return <>
    <Working />
    <div style={{ maxWidth: '1300px', margin: 'auto' }}>
      <Header />
      <Featured /> <hr className="mt-12" />
      <Adviser />
      <Projects />
      <JoinUs />
      <Members />
      <Contact />
    </div>
  </>
}