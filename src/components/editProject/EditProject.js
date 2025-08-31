import { Component } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, updateProject, getAllPicturesForProject, addPicturesForProject, deletePictureProject } from "../../services/projectService";
import { getAllPictures } from "../../services/picturesService";


import "./EditProject.css";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class EditProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            illustrations: [],
            listProjects: [],
            listProjectsPictures: [],
            titleProject: "",
            descriptionProject: "",
            typeProject: "",
            idProjectPicture: "",
            token: props.token,
            idProject: props.idProject,
            project: null,
            updated: false
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.updateProject = this.updateProject.bind(this);
        this.deletePicture = this.deletePicture.bind(this);
        this.fetchDataProject = this.fetchDataProject.bind(this);
        this.fetchDataPictures = this.fetchDataPictures.bind(this);
        this.fetchProjectPictures = this.fetchProjectPictures.bind(this);



    }

    handleChangeInput(event, input) {
        let state = {};
        state[input] = event.target.value;
        state.updated = true;
        this.setState(state);
    }

    async updateProject(event) {
        event.preventDefault();

        const returnOk = await updateProject(this.state.project.id, this.state.titleProject,
            this.state.descriptionProject, this.state.typeProject, this.state.idProjectPicture, this.state.token);
        if (returnOk) {
            this.fetchDataProject();
        } else {
            alert("Erreur lors de la création de projet");
        }
    }

    async deletePicture(idPicture) {
        const returnOk = await deletePictureProject(this.state.idProject, idPicture, this.state.token);
        if (returnOk) {
            this.fetchDataProject();
        } else {
            alert("Erreur lors de la création de projet");
        }
    }

    async fetchDataProject() {
        const project = await getProjectById(this.state.idProject);
        if (project) {
            console.log(project);

            this.setState({
                project: project,
                titleProject: project.title,
                descriptionProject: project.description,
                typeProject: project.type,
                idProjectPicture: project.id_picture,
                updated: false
            })

        }
    }

    async fetchDataPictures() {
        let pictures = await getAllPictures();
        this.setState({ illustrations: pictures });
    }


    async fetchProjectPictures() {
        const pictures = await getAllPicturesForProject(this.state.idProject);
        this.setState({ listProjectsPictures: pictures });
    }

    async addPicturesForProject(idPicture) {
        const returnOk = await addPicturesForProject(this.state.idProject, idPicture, this.state.token);

        if (returnOk) {
            this.fetchDataProject();
            this.fetchProjectPictures();
            this.fetchDataPictures();
        } else {
            alert("Erreur lors de la création de projet");
        }
    }

    makePrincipal(idPicture) {
        this.setState({
            idProjectPicture: idPicture,
            updated: true
        })
    }

    componentDidMount() {
        this.fetchDataProject();
        this.fetchProjectPictures();
        this.fetchDataPictures();

    }

    render() {
        return (
            <div>
                <p>{this.state.project?.picture?.id}
                </p>
                <form className="card project_creation" onSubmit={this.updateProject}>
                    <p>Titre</p>
                    <input type="text" className="input" value={this.state.titleProject} onChange={e => this.handleChangeInput(e, "titleProject")}></input>
                    <p>description</p>
                    <input type="text" className="input" value={this.state.descriptionProject} onChange={e => this.handleChangeInput(e, "descriptionProject")}></input>
                    <p>Type</p>
                    <select value={this.state.typeProject} onChange={e => this.handleChangeInput(e, "typeProject")}>
                        <option value="">--Choisir un type de projet--</option>
                        <option value="projet_pro">Projet pro</option>
                        <option value="illustration">Illustrations</option>
                        <option value="perso">Perso</option>
                        <option value="autre">Autre</option>
                    </select>
                    <button type="submit" disabled={this.state.updated === false}>Valider modification</button>
                </form>

                <div className="card illustrations">
                    <h3>Liste des illustrations liées au projet</h3>
                    {this.state.listProjectsPictures.map((picture, key) =>
                        <div className="container_img container_img_picture" >
                            <img src={picture?.path} alt={picture.description} className="picture" />
                            <div className="text_picture background" />
                            <div className="text_picture">
                                <span>
                                    {picture.title}
                                </span>
                                {picture.id !== this.state.project?.picture?.id ? <button onClick={() => this.makePrincipal(picture?.id)}>Principale</button> : null}
                                <button onClick={() => this.deletePicture(picture?.id)}>Enlever</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="card illustrations">
                    <h3>Liste des illustrations disponibles</h3>
                    {this.state.illustrations.filter(p => !this.state.listProjectsPictures.map(pi => pi.id).includes(p.id)).map((picture, key) =>
                        <div className="container_img container_img_picture" >
                            <img src={picture?.path} alt={picture.description} className="picture" />
                            <div className="text_picture background" />
                            <div className="text_picture">
                                <span>
                                    {picture.title}
                                </span>
                                <button onClick={() => this.addPicturesForProject(picture.id)}>Ajouter au projet</button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )
    }

}


export default withParams(EditProject);