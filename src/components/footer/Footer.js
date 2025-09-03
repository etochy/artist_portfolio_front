import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer_container">
                Website in progress for Lola Morand
                <ButtonBase className="button_navbar" >
                    <Link to="/admin">
                        admin
                    </Link>
                </ButtonBase>
            </div>
        );
    }
}

export default Footer;






