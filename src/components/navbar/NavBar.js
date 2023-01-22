import { Button } from "@mui/material";
import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <div>
                    Site de Lola
                </div>
                <div>
                    <Button variant="contained">A Propos</Button>
                    <Button variant="contained"><Link to="/projects/1">Projet 1</Link></Button>
                    <Button variant="contained">Contact</Button>
                </div>
            </div>
        );
    }
}

export default NavBar;