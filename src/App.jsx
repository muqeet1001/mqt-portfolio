import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ShopPage from './pages/ShopPage'
import BlogsPage from './pages/BlogsPage'
import SongsPage from './pages/SongsPage'
import PlaygroundPage from './pages/PlaygroundPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/products-listing" element={<ShopPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/songs" element={<SongsPage />} />
                <Route path="/playground" element={<PlaygroundPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Layout>
    )
}

export default App
