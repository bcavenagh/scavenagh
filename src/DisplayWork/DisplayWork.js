import React, { Component } from 'react';
import classes from './DisplayWork.module.scss';
import ProjectModal from '../ProjectModal/ProjectModal';
import Modal from '@material-ui/core/Modal';

class DisplayWork extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage:1,
            projectsPerPage:3,
            isProjectModalOpen: false,
            projectModalObject: {}
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.openProjectModal = this.openProjectModal.bind(this);
        
    }
    handleChangePage(event){
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    openProjectModal(project){
        console.log(project)
        this.setState({
            projectModalObject:project,
            isProjectModalOpen:true,
        })
    }
    closeProjectModal = () => {
        this.setState({isProjectModalOpen: false})
    }
    render(){
        let backgroundImage = 'url(https://source.unsplash.com/kKzbyDeb62M) center center';
        if(this.props.wood){
            backgroundImage = 'url(https://source.unsplash.com/oJ7SV6vQfBA) center center';
        }

        const { currentPage, projectsPerPage } = this.state;
        const projects = this.props.projects;

        //Logic for displaying projects
        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

        const renderProjects = currentProjects.map((project, index) => {
            return (
                <div className={classes.Project} style={{background: backgroundImage}} key={index}>
                    <div className={classes.ProjectInfo}>
                        <h3 className={classes.ProjectTitle}>{project.name}</h3>
                        <p className={classes.ProjectPrice}>{project.price}</p>
                        <button className={classes.ProjectDetailsButton} onClick={() => this.openProjectModal(project)}>View Details</button>
                    </div>
                </div>
            )
        });

        //Logic for displaying page numbers
        const pageNumbers = [];
        for(let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            let currentPageClass = ''
            if(number === currentPage){currentPageClass = classes.CurrentPage}
            return (
                <div key={number} id={number} onClick={this.handleChangePage} className={currentPageClass}>{number}</div>
            )
        })
        
        return(
            <>
            <h3 className={classes.title}>{this.props.title}</h3>
            <div className={classes.DisplayWorkContainer}>
                {renderProjects}
            </div>
            <div className={classes.Pager}>{renderPageNumbers}</div>
            <Modal open={this.state.isProjectModalOpen} onClose={this.closeProjectModal}>
                <ProjectModal project={this.state.projectModalObject}/>
            </Modal>
            </>
        );
    }
}
export default DisplayWork; 