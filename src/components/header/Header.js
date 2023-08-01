import { Component } from "react";
import NavBar from '../navbar/NavBar';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div >
                <Link to="/">
                    <div className="container">
                        <h1>
                            Lola Morand
                        </h1>
                        <h2>
                            Illustratrice
                        </h2>
                    </div>
                </Link>
                <NavBar />
                <div className='separator' />
            </div>
        );
    }
}

export default Header;






