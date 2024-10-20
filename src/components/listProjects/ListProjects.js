import { Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllIllustrations } from "../../services/illustrationsService";
import { getAllProjects, getProjectDetails } from "../../services/projectsService";
import { Picture } from "../picture/Picture";

import "./ListProjects.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ListProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjects: [],
        }
    }

    componentDidMount() {
        this.fetchDataProjects();
    }

    async fetchDataProjects() {
        let projects = await getAllProjects();
        this.fetchDetailsProjects(projects);
    }

    async fetchDetailsProjects(projects) {
        let lstP = []
        await projects.forEach(async p => {
            let pro = await getProjectDetails(p.projectName);
            lstP.push(pro);
            this.setState({ listProjects: lstP });
        });
    }

    render() {
        return (
            <div>
                <h3>Mes projets</h3>
                <div className="illustration_container">
                    {this.state.listProjects.map((project, key) =>
                        <Link to={"/projects/" + project.projectName} key={key}>
                            <div className="container_img container_img_project" >
                                <img src={project.illustration} alt={project.description} className="picture" />
                                <div className="text_picture background" />
                                <div className="text_picture">
                                    <span>
                                        {project.name}
                                    </span>
                                    <span>
                                        {project.description}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(ListProjects);