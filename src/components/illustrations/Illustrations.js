import { Component } from "react";
import { useParams } from "react-router-dom";
import { getAllIllustrations } from "../../services/illustrationsService";
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
        let illus = await getAllIllustrations();
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
                        <Picture picture={illustration} key={key} />
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(Illustrations);