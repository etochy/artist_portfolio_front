import { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                Lola Morand. Tous droits réservés
                <p>
                    <Link to="/admin">
                        _
                    </Link>
                </p>
            </div>
        );
    }
}

export default Footer;






