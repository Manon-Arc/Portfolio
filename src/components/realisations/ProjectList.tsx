import React from 'react';
import ProjectUnit from './ProjectUnit';
import { projects } from '../../data/projects';

const ProjectList: React.FC = () => {
  return (
    <div className="project-list" id="list">
      {projects.map((project, index) => (
        <ProjectUnit
          key={index}
          proj={project.proj}
          className={index%2==0?"G":"D"}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          languages={project.languages}
          software={project.software}
          features={project.features}
          team={project.team}
          projectLink={project.projectLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
