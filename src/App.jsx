import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'

function App() {
  return (
    <div className="min-h-screen relative text-gray-100 bg-[#09090b] overflow-x-hidden">
      {/* Subtle dark aurora background */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.15)_0%,_transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -right-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,_rgba(236,72,153,0.15)_0%,_transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-[70vw] bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),_transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Sections />
    </div>
  )
}

export default App
