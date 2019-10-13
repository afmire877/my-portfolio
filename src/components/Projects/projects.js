import './projects.css';
import React, { Fragment } from 'react';
import ProjectPreview from '../project-preview';
import Heading from '../Common/heading';


 

const Projects = ({ data }) => {
    return (
        <Fragment>
            <Heading title="Projects" />
            <div className="projects">
            {data.allProjectsJson.edges.map(({ node: project }) => (
                <ProjectPreview
                key={`preview-${project.slug}`}
                title={project.title}
                description={project.description}
                slug={project.slug}
                imageData={project.image.childImageSharp.fluid}
                tags={project.tags}
                github={project.github}
                url={project.url}
                />
            ))}
            </div>
        </Fragment>
    );
}

export default Projects;

