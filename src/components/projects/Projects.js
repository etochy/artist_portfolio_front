import { Component } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { getAllIllustrationsProject } from "../../services/projectsService";
import { getProjectDetails, getProjetsForTag } from "../../services/infosService";
import "./Projects.css";
import { Picture } from "../picture/Picture";
import { Tooltip } from "@mui/material";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            illustrations: [],
            projectDetail: {
            },
        }
    }

    componentDidMount() {
        this.setState({
            projectName: this.props.params.projectName
        }, () => {
            this.fecthProjectInfos();
        });
    }

    async fecthProjectInfos() {
        let projectDetail = await getProjectDetails(this.state.projectName);
        let illustrations = await getAllIllustrationsProject(this.state.projectName + "/");

        await projectDetail.tags.forEach(async t => {
            t.projects = await getProjetsForTag(t.id);
        });
        console.log(projectDetail);
        this.setState({
            projectDetail: projectDetail,
            illustrations: illustrations
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.projectDetail.name}</p>
                <p>{this.state.projectDetail.description}</p>
                <div className="illustration_container_project">
                    {this.state.illustrations.map((illustration, key) =>
                        <Picture picture={{ illustration: illustration }} key={key} />
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