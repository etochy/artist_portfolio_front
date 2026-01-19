import { Component } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import "./Projects.css";
import { Picture } from "../picture/Picture";
import { Tooltip } from "@mui/material";
import { getProjectById, getAllPicturesForProject } from "../../services/projectService";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectId: "",
            illustrations: [],
            projectDetail: {
            },
        }
    }

    componentDidMount() {
        this.setState({
            projectId: this.props.params.projectId
        }, () => {
            this.fecthProjectInfos();
        });
    }

    async fecthProjectInfos() {
        let projectDetail = await getProjectById(this.state.projectId);
        let illustrations = await getAllPicturesForProject(this.state.projectId);

        // await projectDetail.tags.forEach(async t => {
        //     t.projects = await getProjetsForTag(t.id);
        // });
        console.log(illustrations);
        this.setState({
            projectDetail: projectDetail,
            illustrations: illustrations
        });
    }

    render() {
        return (
            <div className='root__element'>
                <h1>{this.state.projectDetail.title}</h1>
                <h3>{this.state.projectDetail.description}</h3>
                {/* <Picture picture={this.state.projectDetail.picture }/> */}
                <div className="illustration_container_project">
                    {this.state.illustrations.map((illustration, key) =>
                        <Picture picture={ illustration } key={key} />
                    )}
                </div>
                <div className="tags_container_project">
                    {this.state.projectDetail.tags?.map((tag, key) =>
                        <Tooltip key={key} title={
                            <div>
                                <h3>Autres projets</h3>
                                {tag.projects.map((p, key) => (
                                    <p key={key}>{p.name}</p>
                                ))}
                            </div>
                        } >
                            <span className="button_tag" >{tag.name}</span>
                        </Tooltip>
                    )}
                </div>
            </div>
        )
    }
}


export default withParams(Projects);