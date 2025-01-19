import { Component } from "react";
import { useParams } from "react-router-dom";

import "./MainPages.css"

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class MainPages extends Component {

    render() {
        return (
            <div>
                <h3>Illustrations scientifiques</h3>
                <div className="main_container">
                    <div className="main_container__project">
                        <p>Pour vos publications</p>
                        <img src="https://launay-esteban.ovh/public_files/illustrations_lola/projects/2_illustration_lombriciens/ANS-EPA%20V04.01.2022%20%282%29.png" alt="" className="main_container__project__picture" />
                    </div>
                    <div className="main_container__project">
                        <p>Documents techniques</p>
                        <img src="https://launay-esteban.ovh/public_files/illustrations_lola/projects/2_illustration_lombriciens/ANS-EPA%20V04.01.2022%20%282%29.png" alt="" className="main_container__project__picture" />
                    </div>
                    <div className="main_container__project">
                        <p>Pour vos projets de médiation scientifique</p>
                        <img src="https://launay-esteban.ovh/public_files/illustrations_lola/projects/2_illustration_lombriciens/ANS-EPA%20V04.01.2022%20%282%29.png" alt="" className="main_container__project__picture" />
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(MainPages);