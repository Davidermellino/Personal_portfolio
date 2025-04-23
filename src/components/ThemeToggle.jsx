import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </motion.button>
  )
}

export default ThemeToggle