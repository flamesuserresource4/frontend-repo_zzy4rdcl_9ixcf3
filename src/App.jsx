import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_40%)]">
      <Navbar />
      <Hero />
      <Sections />
    </div>
  )
}

export default App
