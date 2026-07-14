import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './features/home/index'
import ProjectsLayout from './features/projects/index'
import ProjectsGallery from './features/projects/ProjectsGallery'
import ProjectDetail from './features/projects/ProjectDetail'
import AboutPage from './features/about/index'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsLayout />}>
            <Route index element={<ProjectsGallery />} />
            <Route path=":slug" element={<ProjectDetail />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
