// import './projects.css';
import React, { Fragment } from 'react';
import ProjectPreview from '../project-preview';
import Heading from '../Common/heading';
import Styled from 'styled-components';

const Project = Styled.div`
    grid-column: 2/12;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    justify-content: center;
    justify-items: center;

    @media (max-width: 735px) {
    .projects {
        grid-column: 6;
    }
    }
`;


 

const Projects = ({ data }) => {
    return (
        <Fragment>
            <Heading title="Projects" />
            <Project >
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
            </Project>
        </Fragment>
    );
}

export default Projects;

