import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
]

function Header() {
  const { theme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
      
      // Determine active section
      const sections = navItems.map(item => item.id)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''} ${theme}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`${scrolled ? 'scrolled' : ''} ${theme}`}
        expanded={expanded}
        style={{ minHeight: '100px' }} 
      >
        <Container className='bg-secondary rounded-3' >
          <Navbar.Brand href="#home" className="logo">Portfolio</Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto fs-2">
              {navItems.map(item => (
                <Nav.Item key={item.id}>
                  <Link
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    {item.label}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
            <Nav>
              <Nav.Item>
                <ThemeToggle />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  )
}

export default Header