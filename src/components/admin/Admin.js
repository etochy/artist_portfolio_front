import { Component } from "react";
import { useParams } from "react-router-dom";
import { getAllProjects, createProject } from "../../services/projectService";
import { getAllPictures, createPicture, deletePicture } from "../../services/picturesService";
import { loginUser } from "../../services/authService";
import EditProject from "../editProject/EditProject";



import "./Admin.css";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginUsername: "",
            illustrations: [],
            listProjects: [],
            login: "",
            password: "",
            isUserLogged: false,
            titleProject: "",
            descriptionProject: "",
            typeProject: "",
            titlePicture: "",
            descriptionPicture: "",
            file: null,
            token: null,
            idProjectToEdit: null
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.createProject = this.createProject.bind(this);
        this.createPicture = this.createPicture.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    componentDidMount() {
        this.fetchDataProjects();
        this.fetchDataPictures();
    }

    async fetchDataProjects() {
        let projects = await getAllProjects();
        this.setState({ listProjects: projects });
    }

    async fetchDataPictures() {
        let pictures = await getAllPictures();
        this.setState({ illustrations: pictures });
    }

    async handleLogin(event) {
        event.preventDefault();

        let token = await loginUser(this.state.login, this.state.password);

        if (token) {
            this.setState({ isUserLogged: true, token: token });
        } else {
            alert("Erreur lors de l'authentification");

            this.setState({ isUserLogged: false, password: "", login: "", token: "" });
        }

    }


    disconnect(event) {
        event.preventDefault();
        this.setState({ isUserLogged: false, password: "", login: "", token: "" });
    }

    handleChangeInput(event, input) {
        let state = {};
        state[input] = event.target.value;
        this.setState(state);
    }

    handleFileChange(event) {
        if (event.target.files) {
            this.setState({ file: event.target.files[0] });
        }
    };


    async createProject(event) {
        event.preventDefault();

        const returnOk = await createProject(this.state.titleProject,
            this.state.descriptionProject, this.state.typeProject, this.state.token);
        if (returnOk) {
            this.setState({
                titleProject: "",
                descriptionProject: "",
                typeProject: ""
            });
            this.fetchDataProjects();
        } else {
            alert("Erreur lors de la création de projet");
        }
    }

    async createPicture(event) {
        event.preventDefault();
        const returnOk = await createPicture(this.state.titlePicture,
            this.state.descriptionPicture, this.state.file, this.state.token);
        if (returnOk) {
            this.setState({
                titlePicture: "",
                descriptionPicture: "",
                file: null
            });
            this.fetchDataPictures();
        } else {
            alert("Erreur lors de la création de l'image");
        }
    }

    async deletePicture(idPicture) {
        if (window.confirm("Suppression de l'image ?") === true) {
            const returnOk = await deletePicture(idPicture, this.state.token);
            if (returnOk) {
                this.fetchDataPictures();
            } else {
                alert("Erreur lors de la suppression");
            }
        }
    }

    updateProject(idProject) {
        this.setState({ idProjectToEdit: idProject });
    }

    closePopup() {
        this.setState({ idProjectToEdit: null });
    }



    render() {
        let loginPart;
        if (!this.state.isUserLogged) {
            loginPart = (
                <form className="card login" onSubmit={this.handleLogin}>
                    <input type="text" className="login_input" value={this.state.login} onChange={e => this.handleChangeInput(e, "login")}></input>
                    <input type="password" className="passwod_input" value={this.state.password} onChange={e => this.handleChangeInput(e, "password")}></input>
                    <button type="submit">Login</button>
                </form>
            )
        } else {
            loginPart = (
                <button onClick={this.disconnect} >Deconnexion</button>
            )
        }

        const createProjectForm = (
            <form className="card project_creation" onSubmit={this.createProject}>
                <h3>Créer un nouveau projet</h3>
                <p>Titre</p>
                <input type="text" className="input" value={this.state.titleProject} onChange={e => this.handleChangeInput(e, "titleProject")}></input>
                <p>description</p>
                <textarea className="input" rows="5" cols="70"  value={this.state.descriptionProject} onChange={e => this.handleChangeInput(e, "descriptionProject")}></textarea>
                <p>Type</p>
                <select value={this.state.typeProject} onChange={e => this.handleChangeInput(e, "typeProject")}>
                    <option value="">--Choisir un type de projet--</option>
                    <option value="projet_pro">Projet pro</option>
                    <option value="illustration">Illustrations</option>
                    <option value="perso">Perso</option>
                    <option value="autre">Autre</option>
                </select>
                <button type="submit">Créer projet</button>
            </form>
        )

        const createPictureForm = (
            <form className="card project_creation" onSubmit={this.createPicture}>
                <h3>Ajouter une nouvelle illustration</h3>
                <p>Titre</p>
                <input type="text" className="input" value={this.state.titlePicture} onChange={e => this.handleChangeInput(e, "titlePicture")}></input>
                <p>description</p>
                <textarea className="input" rows="5" cols="70"  value={this.state.descriptionPicture} onChange={e => this.handleChangeInput(e, "descriptionPicture")}></textarea>
                <p>Fichier</p>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={this.handleFileChange} />
                <button type="submit">Créer Image</button>
            </form>
        )

        const createPopupEditProject = (
            <div className="popup">
                <div className="popup__content">
                    <div>Edition de projet</div>
                    <EditProject idProject={this.state.idProjectToEdit} token={this.state.token} />
                    <button onClick={() => this.closePopup()}>Fermer</button>
                </div>
            </div>
        );


        return (
            <div>
                <h1>Administration</h1>
                {loginPart}
                {this.state.token ? createProjectForm : null}
                {this.state.token ? createPictureForm : null}
                {this.state.idProjectToEdit ? createPopupEditProject : null}
                <h3>Liste des projets</h3>
                <div className="card projects">
                    {this.state.listProjects.map((project, key) =>
                        <div className="container_img container_img_project" >
                            <img src={project.illustration?.path} alt={project.description} className="picture" />
                            <div className="text_picture background" />
                            <div className="text_picture">
                                <span>
                                    {project.title}
                                </span>
                                <span>
                                    {project.type}
                                </span>
                                {this.state.token ? <button onClick={() => this.updateProject(project.id)}>Edit</button> : null}
                            </div>

                        </div>
                    )}
                </div>
                <h3>Liste des illustrations</h3>
                <div className="card illustrations">
                    {this.state.illustrations.map((picture, key) =>
                        <div className="container_img container_img_picture" >
                            <img src={picture?.path} alt={picture.description} className="picture" />
                            <div className="text_picture background" />
                            <div className="text_picture">
                                <span>
                                    {picture.title}
                                </span>
                                {this.state.token ? <button onClick={() => this.deletePicture(picture.id)}>Delete</button> : null}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default withParams(Admin);