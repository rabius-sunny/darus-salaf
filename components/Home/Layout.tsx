import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Layout = ({ children }) => (
  <>
    <header>
      <h1 className='bg-red-500 p-4 font-bold text-center text-white'><Link href='/'>This is navigation</Link></h1>
    </header>
    <div className="py-8 text-center font-bold text-5xl">
      {children}
    </div>
    <footer className='bg-blue-500 p-4 font-bold text-center text-white'>
      <h1>This is Footer</h1>
    </footer>
  </>
)

export default Layout
