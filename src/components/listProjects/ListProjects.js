import { Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../services/projectService";
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
        this.setState({ listProjects: projects });
    }

    render() {
        return (
            <div>
                <h3>Mes projets</h3>
                <div className="illustration_container">
                    {this.state.listProjects.map((project, key) =>
                        <Link to={"/projects/" + project.id} key={key}>
                            <div className="container_img container_img_project" >
                                <img src={project.illustration?.path} alt={project.description} className="picture" />
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