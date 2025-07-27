import { Component } from "react";
import { useParams } from "react-router-dom";
import { getAllPictures } from "../../services/picturesService";
import { SmallPicture } from "../smallPicture/SmallPicture";

import "./IllustrationsTest2.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class IllustrationsTest2 extends Component {
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
            <div  className='root__element'>
                <h3>Illustrations affichage 1</h3>
                <div className="test2__illustration_container">
                    {this.state.listIllustrations.map((illustration, key) =>
                        <SmallPicture picture={illustration.path} key={key}/>
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(IllustrationsTest2);