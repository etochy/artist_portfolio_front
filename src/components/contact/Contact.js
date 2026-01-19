import { Component } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import "./Contact.css";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                mail: "",
                object: "",
                message: "",
            }
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <span>
                    Contact :
                </span>
                <br />
                <br />
                <span>Vous pouvez me contacter en envoyer un mail à : <a href="mailto:lolamorand.illustration@gmail.com" target="_blank">lolamorand.illustration@gmail.com</a></span>
                <br />
                <span>Ou me contacter via instagram : <a href="https://www.instagram.com/straka.illustration/" target="_blank">straka.illustration</a></span>
                <br />
                <br />
            </div>
        )
    }
}

export default withParams(Contact);