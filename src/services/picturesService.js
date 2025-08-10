const API_URL = process.env.REACT_APP_URL_API;
const URL_PICTURES = process.env.REACT_APP_URL_PICTURES;


const FETCH_URL_PRICTURES = API_URL + "picture";

export function getAllPictures() {
    return new Promise(resolve => {
        fetch(
            FETCH_URL_PRICTURES,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((result) => {
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


export function getPictureById(idPicture) {
    return new Promise(resolve => {
        if (!idPicture) return resolve(null);
        else {
            fetch(
                FETCH_URL_PRICTURES + "/" + idPicture,
                {
                    method: "GET",
                }
            )
                .then((response) => response.json())
                .then((result) => {
                    const picture = result.picture;
                    picture.path = URL_PICTURES + picture.path;
                    resolve(result.picture);
                });
        }

    });
}


export function createPicture(title, description, file, token) {
    const formData = new FormData();
    formData.append("data", JSON.stringify({
        title: title,
        description: description
    }));
    formData.append("file", file);
    return new Promise(resolve => {
        fetch(
            FETCH_URL_PRICTURES,
            {
                method: "POST",
                headers: {
                    authorization: token
                },
                body: formData
            },
        )
            .then((response) =>
                response.json
            ).then(data => {
                if (data.status <= 204) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
    });
}
