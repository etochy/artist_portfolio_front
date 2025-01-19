import { Component } from "react";
import NavBar from '../navbar/NavBar';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className="header__container">
                <Link to="/">
                    <div>
                        <span className="header__text">
                            Lola Morand
                        </span>
                    </div>
                </Link>
                <div className='separator' />
                <NavBar />
            </div>
        );
    }
}

export default Header;






