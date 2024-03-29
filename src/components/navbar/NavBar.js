import { ButtonBase } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
// import { ReactComponent as SendIcon } from '../../assets/arrowdown.svg';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar_container">
                    <ButtonBase className="button_navbar" >
                        <Link to="/">
                            Home
                        </Link>
                    </ButtonBase>
                    <ButtonBase className="button_navbar">
                        <Link to="#about-me">
                            A propos
                        </Link>
                    </ButtonBase>
                    <ButtonBase className="button_navbar">
                        <Link to="/projects">
                            <div className="button_navbar_container">
                                <span>
                                    Liste Projets
                                </span>
                                {/* <SendIcon className="whiteIcon" /> */}
                            </div>
                        </Link>
                    </ButtonBase>
                    {/* <Button  class="button_navbar"  variant="contained"><Link to="/projects/1">Projet 1</Link></Button> */}
                    <ButtonBase className="button_navbar" >Contact</ButtonBase>
                </div>
            </div>
        );
    }
}

export default NavBar;