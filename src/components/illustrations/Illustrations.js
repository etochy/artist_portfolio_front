import { Component } from "react";
import { useParams } from "react-router-dom";
import { getAllPictures } from "../../services/picturesService";
import { Picture } from "../picture/Picture";

import "./Illustrations.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Illustrations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIllustrations: []
        }
    }

    componentDidMount() {
        this.fetchDataProjects();
    }

    async fetchDataProjects() {
        let illus = await getAllPictures();
        this.setState({
            listIllustrations: illus
        });
    }

    render() {
        return (
            <div>
                <h3>Illustrations</h3>
                <div className="illustration_container">
                    {this.state.listIllustrations.map((illustration, key) =>
                        <Picture picture={illustration.path} key={key} />
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(Illustrations);