import React from 'react';

const ProjectCard = (props) => {
    const LinkNotAvailable = (type) => {
        alert(type==="git"? "Code Not Shared Yet" : "Ooops!! Project Not Deployed Yet")
    };
    return (
        <div className="project-card">
        <img src={props.projectDetails.imageSrc} className="project-img" alt="" />
        <div className="project-content">
            <h1 className="project-title">{props.projectDetails.title}</h1>
            <p className="project-info">
                {props.projectDetails.description}
            </p>
            <div className="project-btn-grp">
                <button className="project-btn github" onClick={() => {props.projectDetails.githubURL !== ""? window.open(props.projectDetails.githubURL) : LinkNotAvailable("git")}}>github repo</button>
                <button className="project-btn live" onClick={() => {props.projectDetails.liveURL !== ""? window.open(props.projectDetails.liveURL) : LinkNotAvailable("live")}}>see live</button>
            </div>
        </div>
    </div>
    );
}

export default ProjectCard;
