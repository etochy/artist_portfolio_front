import { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idProject: ""
        }
    }

    componentDidMount() {
        this.setState({
            idProject: this.props.params.idProject
        });
    }

    render() {
        return (
        <div>
            Projects, id : {this.state.idProject}
        </div>
        )
    }
}

export default withParams(Projects);