import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

function About() {
    const skills = [
   { name: 'Python', color: 'success' },
   { name: 'R', color: 'info' },
   { name: 'SQL', color: 'primary' },
   { name: 'JavaScript', color: 'danger' },
   { name: 'React', color: 'warning' },
   { name: 'C', color: 'success' },
   { name: 'D3', color: 'info' },
   { name: 'Machine Learning', color: 'primary' }
  ]


  const education = [
    {
      year: '26/06/2023 - 26/09/2023',
      degree: 'Full Stack Developer Junior Coding Bootcamp',
      institution: 'Aulab Srl, Bari',
      description: 'Intensive full-stack web development training covering HTML, CSS, JavaScript, PHP and SQL.' 
    },
    {
      year: '30/09/2023 - 02/12/2023',
      degree: 'React.js Coding Masterclass',
      institution: 'Aulab Srl, Bari',
      description: 'Advanced React.js course focusing on component-based architecture, state management and modern front-end development practices.'
    },
    {
      year: '2018 - 2023',
      degree: 'High school in applied sciences',
      institution: 'Liceo Leon Battista alberti',
      description: 'Built a solid foundation in mathematics and basic computer science, including introductory web development and databases.',
      grade: 90
    },
    {
      year: '2023 - 2026',  
      degree: 'Bachelor of Science in Applied Computer Science and Data Analytics',
      institution: 'Università degli studi di Cagliari',
      description: 'Developed expertise in artificial intelligence and data analytics through courses on machine learning, deep learning, big data processing, data visualization and statistical inference'
    }
  ]

  const experience = [
   {
        year: "09/2025 - 11/2025",
        role: "Junior Researcher",
        company: "Universidad de Las Palmas de Gran Canaria",
        description: "Computer Vision traineeship at iROC-SIANI research group, focusing on image processing, dataset handling, and deep learning model implementation for object recognition."
    }

  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/cv_davide_ermellino_english.pdf';
    link.download = 'cv_davide_ermellino_english.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-heading text-center mb-5" variants={itemVariants}>
            <h2>About Me</h2>
            <div className="heading-line"></div>
          </motion.div>

          <Row className="mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div variants={itemVariants}>
                <h3>Biography</h3>
                <p>
                    I'm an Applied Computer Science student ranking among the top in my class. I combine rational thinking with                     intuition to tackle complex problems, leveraging strong analytical logic and prioritization abilities to                         find efficient solutions in technical environments.
                </p>
                <p>
                    My academic journey has equipped me with a solid foundation in various programming languages and frameworks, with a particular focus on data-driven technologies. I've helped on some university projects, contributing to a GUI for a research tool and assisting with a robotics project that have enhanced my technical versatility.
                </p>
                <p>
                    I thrive in collaborative settings and am deeply motivated to expand my expertise in AI and data science                        fields. With a team-oriented mindset and problem-solving approach.
                  </p>
                <div className="mt-4">
                  <Button variant="primary" className="resume-btn" onClick={handleDownloadCV}>
                    <FaDownload className="me-2" /> Download Resume
                  </Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3>Technical Skills</h3>
                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item mb-3">
                      <div className={`d-flex justify-content-between mb-1 border border-white p-2 rounded-3 text-${skill.color}`}>
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <motion.div variants={itemVariants}>
                <h3 className="mb-4">
                  <FaGraduationCap className="me-2" /> Education
                </h3>
                <div className="timeline">
                  {education.map((item, index) => (
                    <Card key={index} className="timeline-item mb-4">
                      <Card.Body>
                        <div className="timeline-badge">{index + 1}</div>
                        <h5 className="timeline-title">{item.degree}</h5>
                        <h6 className="timeline-subtitle">{item.institution}</h6>
                        <div className="timeline-year">{item.year}</div>
                        <p className="timeline-text">{item.description}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 className="mb-4">
                  <FaBriefcase className="me-2" /> Experience
                </h3>
                <div className="timeline">
                  {experience.map((item, index) => (
                    <Card key={index} className="timeline-item mb-4">
                      <Card.Body>
                        <div className="timeline-badge">{index + 1}</div>
                        <h5 className="timeline-title">{item.role}</h5>
                        <h6 className="timeline-subtitle">{item.company}</h6>
                        <div className="timeline-year">{item.year}</div>
                        <p className="timeline-text">{item.description}</p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default About