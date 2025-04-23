import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
  const year = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/Davidermellino', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/davide-ermellino/', label: 'LinkedIn' },
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/davidermellino/', label: 'Instagram' },
    { icon: <FaEnvelope />, url: 'd.ermellino@studenti.unica.it', label: 'Email' }
  ]
  

  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {year} Data Science Portfolio. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer