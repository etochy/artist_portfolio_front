import { Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./ListProjects.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class ListProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProjects: [],
            listIllustrations: []
        }
    }

    componentDidMount() {
        this.fetchDataProjects();
    }

    fetchDataProjects() {
        let tmpProjects = [
            {
                id:"1",
                name: "Projet 1",
                description: "Description projet 1",
                illustration: "https://launay-esteban.ovh/public_files/pictures/macro/P1020140.jpg"
            },
            {
                id:"2",
                name: "Projet 2",
                description: "Description projet 2",
                illustration: "https://launay-esteban.ovh/public_files/pictures/macro/P1020117.jpg"
            },
            {
                id:"3",
                name: "Projet 3",
                description: "Description projet 3",
                illustration: "https://launay-esteban.ovh/public_files/pictures/macro/IMGP5138.jpg"
            },
            {
                id:"4",
                name: "Projet 4",
                description: "Description projet 4",
                illustration: "https://launay-esteban.ovh/public_files/pictures/animals/IMGP2602.jpg"
            },
            {
                id:"5",
                name: "Projet 5",
                description: "Description projet 5",
                illustration: "https://launay-esteban.ovh/public_files/pictures/landscapes/P1020183.jpg"
            },
        ];
        let tmpIllustrations = [
            {
                name: "Illustration 1",
                description: "Description 1",
                illustration: "https://launay-esteban.ovh/public_files/pictures/laos/IMGP1043.jpg"
            },
            {
                name: "Illustration 2",
                description: "Description 2",
                illustration: "https://launay-esteban.ovh/public_files/pictures/south_france/P1000543.jpg"
            },
            {
                name: "Illustration 3",
                description: "Description 3",
                illustration: "https://launay-esteban.ovh/public_files/pictures/north_france/P1010771.jpg"
            },
        ];
        this.setState({
            listProjects: tmpProjects,
            listIllustrations: tmpIllustrations
        });
    }

    render() {
        return (
            <div>
                <h3>Illustrations</h3>
                <div className="illustration_container">
                    {this.state.listIllustrations.map((illustration, key) =>
                        <div key={key} className="container_img" >
                            <img src={illustration.illustration} alt={illustration.description} className="picture" />
                            <div className="text_picture">
                                    <span>
                                        {illustration.name}
                                    </span>
                                    <span>
                                        {illustration.description}
                                    </span>
                                </div>
                        </div>
                    )}
                </div>

                <h3>Mes projets</h3>
                <div className="illustration_container">
                    {this.state.listProjects.map((project, key) =>
                        <Link to={"/projects/"+project.id} key={key}>
                            <div className="container_img container_img_project" >
                                <img src={project.illustration} alt={project.description} className="picture" />
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