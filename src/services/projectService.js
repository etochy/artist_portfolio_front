
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
                    console.log("check");
                    const picture = project.picture;
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
