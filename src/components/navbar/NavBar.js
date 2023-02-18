import { Button } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import { ReactComponent as SendIcon } from '../../assets/arrowdown.svg';

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar_container">
                    <Button className="button_navbar" variant="contained">A Propos</Button>
                    <Button className="button_navbar" variant="contained">
                        <Link to="/projects">
                            <div className="button_navbar_container">
                                <span>
                                    List Projets
                                </span>
                                <SendIcon className="whiteIcon" />
                            </div>
                        </Link>
                    </Button>
                    {/* <Button  class="button_navbar"  variant="contained"><Link to="/projects/1">Projet 1</Link></Button> */}
                    <Button className="button_navbar" variant="contained">Contact</Button>
                </div>
            </div>
        );
    }
}

export default NavBar;