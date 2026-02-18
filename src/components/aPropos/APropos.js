import { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class APropos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>
                    Passionnée d'arts et de sciences, j'ai fait des études de biologie pour me spécialiser en écologie des sols et des agrosystèmes tout en conservant une pratique du dessin en parallèle. Mes diverses    expériences m'ont permis de naviguer entre le domaine de la recherche et celui de l'animation scientifique, en passant par les sciences participatives. J'ai ainsi développé un attrait pour la médiation scientifique auquel j'ai mêlé ma créativité en produisant des illustrations pour des projets divers.
                </p>
                <p>
                    Cette pluralité d'expériences me permet aujourd'hui en qualité d'illustratrice scientifique de vous accompagner dans vos projets que vous soyez :
                </p>
                <p>
                    Chercheur.euse.s ou technicien.e.s souhaitant valoriser vos travaux à travers des illustrations ou des visuels clairs et pertinents.
                </p>
                <p>
                    Animateur.ice.s ou médiateur.ice.s scientifiques, ayant besoin d'outils pédagogiques attractifs pour transmettre des savoirs et les rendre accessibles au plus grand nombre
                </p>
                <p>
                    Passionné.e.s de science avec un projet particulier en tête
                </p>
                <p>
                    Donner vie aux concepts que vous souhaitez illustrer demande de trouver un équilibre entre la rigueur et l'esthétisme afin d'obtenir un visuel impactant. Chaque projet est singulier et j'accorde une importance toute particulière à adapter ma pratique à vos besoins..
                </p>
            </div>
        )
    }
}

export default withParams(APropos);