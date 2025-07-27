import { Component } from "react";
import { useParams } from "react-router-dom";
// import { getAllIllustrations } from "../../services/illustrationsService";
import { SmallPicture } from "../smallPicture/SmallPicture";

import "./About.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class About extends Component {
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
        // let illus = await getAllIllustrations();
        // this.setState({
        //     listIllustrations: illus
        // });
    }

    render() {
        return (
            <div className='root__element'>
                <h3>Illustrations affichage 1</h3>
                <div className="test1__illustration_container">
                    {this.state.listIllustrations.map((illustration, key) =>
                        <SmallPicture picture={illustration} key={key} />
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(About);