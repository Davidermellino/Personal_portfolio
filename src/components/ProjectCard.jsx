import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Card className="h-100 shadow-sm p-4" style={{ backgroundColor: 'var(--bs-dark)', color: 'var(--bs-light)' }}>
      <Card.Img variant="top" src={project.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {isExpanded ? project.description : truncateText(project.description, 150)}
        </Card.Text>
        <Button 
          variant="link" 
          className="p-0 mb-3" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </Button>
        <div className="mt-auto">
          {project.technologies.map((tech, index) => (
            <span key={index} className="badge bg-primary me-2 mb-2">
              {tech}
            </span>
          ))}
          <div className="d-flex gap-3 mt-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-light"
            >
              <FaGithub size={24} />
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light"
              >
                <FaExternalLinkAlt size={22} />
              </a>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;