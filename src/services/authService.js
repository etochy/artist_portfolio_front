const API_URL = process.env.REACT_APP_URL_API;


const URL_LOGIN = API_URL + "auth/login";

export function loginUser(login, password) {
    return new Promise(resolve => {
        fetch(
            URL_LOGIN,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: login,
                    password: password
                })
            },
        )
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                resolve(result.token);
            });
    });
}

