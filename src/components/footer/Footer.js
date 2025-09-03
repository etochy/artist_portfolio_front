import { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                Website in progress for Lola Morand
                <p>
                    <Link to="/admin">
                        admin
                    </Link>
                </p>
            </div>
        );
    }
}

export default Footer;






