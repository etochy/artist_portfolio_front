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
                    A propos :
                </span>
                <br />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque tortor sit amet scelerisque eleifend. Etiam dignissim tortor in egestas tempus. Maecenas fermentum mattis tellus. Nunc rhoncus, magna venenatis vestibulum ultricies, quam est vestibulum ipsum, et facilisis ante arcu vel massa. In viverra, nulla viverra commodo congue, sapien nisi volutpat arcu, quis interdum lacus purus at ipsum. Phasellus nec arcu bibendum, maximus libero id, laoreet dolor. Donec accumsan dui et mattis convallis. Sed ut tellus urna. Suspendisse potenti. Praesent viverra gravida dapibus. Cras felis sapien, viverra quis diam laoreet, volutpat rhoncus urna. Etiam commodo, nibh nec mattis cursus, libero libero scelerisque eros, non tincidunt massa ex nec nisl.
                </span>
            </div>
        )
    }
}

export default withParams(APropos);