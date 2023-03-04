import { Component } from "react";
import { useParams } from "react-router-dom";
import { getAllIllustrationsProject, getProjectDetails } from "../../services/projectsService";
import "./Projects.css";

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

            }
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
        let projectDetail = await getProjectDetails(this.state.projectName + "/");
        let illustrations = await getAllIllustrationsProject(this.state.projectName + "/");
        
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
                        <a key={key} className="container_img" rel="noopener noreferrer" target="_blank" href={illustration}>
                            <img src={illustration} className="picture" alt={illustration}/>
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(Projects);