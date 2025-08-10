
const URL_PICTURES = process.env.REACT_APP_URL_PICTURES;

const API_URL = process.env.REACT_APP_URL_API;
const FETCH_URL_PROJECT = API_URL + "project";

export function getAllProjects() {
    return new Promise(resolve => {
        fetch(
            FETCH_URL_PROJECT,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((result) => {
                let projectsList = [];
                result.projects.forEach(async project => {
                    const picture = project.picture;
                    if (picture)
                        picture.path = URL_PICTURES + picture.path
                    projectsList.push({
                        id: project.id,
                        name: project.title,
                        description: project.description,
                        illustration: picture,
                        projectName: project.title,
                        tye: project.type
                    });

                });
                resolve(projectsList);
            });
    });
}

export async function getProjectById(idProject) {

    return new Promise(resolve => {
        fetch(
            FETCH_URL_PROJECT + "/" + idProject,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then(async (result) => {
                const project = result.project;
                const picture = project.picture;
                picture.path = URL_PICTURES + picture.path
                let projects = {
                    id: project.id,
                    name: project.title,
                    description: project.description,
                    illustration: picture,
                    projectName: project.title,
                    tye: project.type
                }
                resolve(projects);
            });
    });
}

export async function getAllPicturesForProject(idProject) {

    return new Promise(resolve => {
        fetch(
            FETCH_URL_PROJECT + "/" + idProject + "/pictures",
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then(async (result) => {
                let picturesList = [];
                result.pictures.forEach(picture => {
                    picturesList.push({
                        id: picture.id,
                        title: picture.title,
                        description: picture.description,
                        path: URL_PICTURES + picture.path
                    });

                });
                resolve(picturesList);
            });
    });
}

export function createProject(title, description, type, token) {
    return new Promise(resolve => {
        fetch(
            FETCH_URL_PROJECT,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: token
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    type: type

                })
            },
        )
            .then((response) => {
                resolve(true);
            }).catch(err => resolve(false));
    });
}

export function updateProject(title, description, type, idPicture) {
    return new Promise(resolve => {
        fetch(
            FETCH_URL_PROJECT,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    type: type,
                    id_picture: idPicture

                })
            },
        )
            .then((response) => {
                resolve(true);
            }).catch(err => resolve(false))
    });
}
