import { Component } from "react";
import { useParams } from "react-router-dom";
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
                <p>Vous pouvez me contacter en envoyer un mail à : <a href="mailto:lolamorand.illustration@gmail.com"  rel="noreferrer"  target="_blank">lolamorand.illustration@gmail.com</a></p>

                <p>Ou me contacter via instagram : <a href="https://www.instagram.com/straka.illustration/" rel="noreferrer"  target="_blank">straka.illustration</a></p>

                <a href="https://lola-morand-illustration.ovh/BOOK_MORAND_Lola_2026.pdf" rel="noreferrer" target="_blank">Cliquer pour accéder à mon portfolio</a>
                <br />
            </div>
        )
    }
}

export default withParams(Contact);