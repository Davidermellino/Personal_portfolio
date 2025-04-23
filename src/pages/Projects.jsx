import { useState } from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Research Tool for Automatic References Generation',
      description: 'Collaborated with a professor and his team to develop a GUI and some backend for a research tool that automatically generates references from a given text. The project uses JavaScript and Python to implement the tool\'s functionality.',
      image: 'public/assets/projects_imgs/GUI_ref.png',
      technologies: ['JavaScript', 'Python'],
      github: 'https://github.com/Davidermellino'
    },
    {
      id: 2,
      title: 'Universal Robot UR5 Movement Management',
      description: 'Working alongside two PhD researchers on a project involving the Universal Robot UR5. I am focusing on managing the robot\'s movements using Python. The tasks include detecting and tracing stains on a pizza box with a camera, converting the points into robot-specific coordinates, and programming the UR5 robot to outline the shape with a marker.',
      image: 'public/assets/projects_imgs/Ur5_project.jpeg',
      technologies: ['Python'],
      github: 'https://github.com/Davidermellino'
    },
    {
      id: 3,
      title: 'DastGames - Interactive Platform for Game Exploration',
      description: 'An interactive platform developed during the React Masterclass at Aulab. It offers an immersive environment to explore a wide list of games, search for favorites, and access detailed information on each game.',
      image: 'public/assets/projects_imgs/dastgames.png',
      technologies: ['React', 'JavaScript'],
      github: 'https://github.com/Davidermellino/dastGames',
      demo: 'https://dast-games.vercel.app/'
    },
    {
      id: 4,
      title: 'Diabetes Predictor',
      description: 'A collection of classification models designed to predict diabetes risk using health indicator data. The project features various classifiers—including both custom implementations and scikit-learn models—along with scripts for data analysis, preprocessing, and hyperparameter tuning.',
      image:'public/assets/projects_imgs/diabetes_predictor.png',
      technologies: ['Python', 'ML'],
      github: 'https://github.com/Davidermellino/DiabetesPredictor'
    },
    {
      id: 4,
      title: 'Frogger Resurrection',
      description: 'Variant of the game frogger written in C with sockets. One version with thread and another one with processes',
      image:'public/assets/projects_imgs/frogger.png',
      technologies: ['C'],
      github: 'https://github.com/LucaAgus/Project_SOPR'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter))

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

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Python', value: 'Python' },
    { label: 'R', value: 'R' },
    { label: 'SQL', value: 'SQL' },
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'React', value: 'React' },
    { label: 'C', value: 'C' },
    { label: 'D3', value: 'D3' },
    { label: 'ML', value: 'ML' }
  ]


  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="section-heading text-center mb-5" variants={itemVariants}>
            <h2>My Projects</h2>
            <div className="heading-line"></div>
            <p className="lead">Explore my data science projects and applications</p>
          </motion.div>

          <motion.div className="filter-buttons text-center mb-5" variants={itemVariants}>
            {filters.map(filterOption => (
              <Button
                key={filterOption.value}
                variant={filter === filterOption.value ? 'primary' : 'outline-primary'}
                className="mx-2 mb-2"
                onClick={() => setFilter(filterOption.value)}
              >
                {filterOption.label}
              </Button>
            ))}
          </motion.div>

          <Row>
            <AnimatePresence>
              {filteredProjects.map(project => (
                <Col lg={6} key={project.id} className="mb-4">
                  <motion.div
                    variants={itemVariants}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>
    </section>
  )
}

export default Projects