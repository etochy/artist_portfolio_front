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
                    Me contacter :
                </span>
                <br />
                <span>Vous pouvez me contacter en envoyer un mail à : ceciEstUneFausseAdresse@gmail.com</span>
                <br />
                <span>Ou via le formulaire si dessous</span>
                <br />
                <div className="contact_container">
                    <div className="contact_header">
                        <TextField
                            required
                            id="mail"
                            label="Adresse Mail"
                            className="contact_mail"
                        />
                        <TextField
                            required
                            id="object"
                            label="Objet"
                        />
                    </div>
                    <TextField
                        required
                        id="message"
                        label="Message"
                        multiline
                        rows={4}
                    />
                </div>
            </div>
        )
    }
}

export default withParams(Contact);