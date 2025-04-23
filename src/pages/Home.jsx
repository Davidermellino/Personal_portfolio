import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Home() {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com/Davidermellino', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/davide-ermellino/', label: 'LinkedIn' },
    { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/davidermellino/', label: 'Instagram' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  }

  return (
    <section id="home" className="home-section">
      <Container>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.span className="subtitle" variants={itemVariants}>
                Hello, I'm
              </motion.span>
              <motion.h1 className="name" variants={itemVariants}>
                Davide Ermellino
              </motion.h1>
              <motion.h2 className="title" variants={itemVariants}>
                Applied Computer Science and Data Analytics Student
              </motion.h2>
              <motion.p className="description" variants={itemVariants}>
                I like studying 
                and doing sport
              </motion.p>
              <motion.div className="buttons" variants={itemVariants}>
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  <Button variant="primary" size="lg" className="me-3">View Projects</Button>
                </Link>
                <Link to="about" smooth={true} duration={500} offset={-70}>
                  <Button variant="outline-primary" size="lg">About Me</Button>
                </Link>
              </motion.div>
              <motion.div className="social-links mt-4" variants={itemVariants}>
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
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div 
                className="profile-image-container"
                variants={itemVariants}
              >
                <img 
                  src="src/assets/profile_img.png" 
                  alt="Data Scientist Profile" 
                  className="profile-image"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default Home