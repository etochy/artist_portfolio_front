import { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class APropos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <span>
                    Illustratrice indépendante travaillant sur Rennes.
                </span>
            </div>
        )
    }
}

export default withParams(APropos);