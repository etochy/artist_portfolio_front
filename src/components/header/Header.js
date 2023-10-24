import { Component } from "react";
import NavBar from '../navbar/NavBar';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div >
                <Link to="/">
                    <div className="containerHeader">
                        <div className="plan">
                            <div className="containerLeft">
                                <div className="containerRight" />
                            </div>
                        </div>
                        <div className="plan">
                            <div className="containerDetails" />
                        </div>
                        <div className="plan">
                            <div className="containerDetails2" />
                        </div>
                        <div className="plan ">
                            <h1>
                                Lola Morand
                            </h1>
                            <h2>
                                Illustratrice
                            </h2>
                        </div>
                    </div>
                </Link>
                <NavBar />
                <div className='separator' />
            </div>
        );
    }
}

export default Header;






