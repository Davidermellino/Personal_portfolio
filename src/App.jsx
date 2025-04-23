import { useEffect } from 'react'
import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/App.css'

function App() {
  const { theme } = useTheme()
  
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main>
          <Home/>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default App