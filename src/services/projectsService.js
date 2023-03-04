const FETCH_URL_ILLUSTRATIONS = "https://launay-esteban.ovh/public_files/illustrations_lola/projects/";

export function getAllProjects() {
    return new Promise(resolve => {
        fetch(
            FETCH_URL_ILLUSTRATIONS,
            {
                method: "GET",
            }
        )
            .then((response) => response.body)
            .then((rb) => {
                const reader = rb.getReader();
                return new ReadableStream({
                    start(controller) {
                        // The following function handles each data chunk
                        function push() {
                            // "done" is a Boolean and value a "Uint8Array"
                            reader.read().then(({ done, value }) => {
                                // If there is no more data to read
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                // Get the data and send it to the browser via the controller
                                controller.enqueue(value);
                                push();
                            });
                        }
                        push();
                    },
                });
            })
            .then((stream) => {
                // Respond with our stream
                return new Response(stream, {
                    headers: { "Content-Type": "text/html" },
                }).text();
            })
            .then((result) => {
                // Match folders
                const regexp = /="(?!\.\.)(.*)"/gm;
                const array = [...result.matchAll(regexp)];
                let projectsList = [];

                array.forEach((e, k) => {
                    let projectName = e["0"].substring(2, e["0"].length - 1);

                    projectsList.push({
                        id: k,
                        name: "",
                        description: "",
                        illustration: "",
                        projectName: projectName
                    });

                });
                console.log("resolve : " + projectsList.length);

                resolve(projectsList);
            });
    });
}

function readFileInfo(fileUrl) {
    return new Promise(resolve => {
        fetch(fileUrl)
            .then((response) => response.json())
            .then((json) => resolve(json));
    })
}

export async function getProjectDetails(projectName) {
    let infosFile = FETCH_URL_ILLUSTRATIONS + projectName + "info.json";
    let infos = await readFileInfo(infosFile);

    return {
        id: infos.id,
        name: infos.title,
        description: infos.description,
        illustration: FETCH_URL_ILLUSTRATIONS+projectName+infos.mainImg,
        projectName: projectName
    };

}

export function getAllIllustrationsProject(projectName) {
    let illustrationsList = [];
    return new Promise(resolve => {
        fetch(
            FETCH_URL_ILLUSTRATIONS + projectName,
            {
                method: "GET",
            }
        )
            .then((response) => response.body)
            .then((rb) => {
                const reader = rb.getReader();
                return new ReadableStream({
                    start(controller) {
                        // The following function handles each data chunk
                        function push() {
                            // "done" is a Boolean and value a "Uint8Array"
                            reader.read().then(({ done, value }) => {
                                // If there is no more data to read
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                // Get the data and send it to the browser via the controller
                                controller.enqueue(value);
                                push();
                            });
                        }
                        push();
                    },
                });
            })
            .then((stream) => {
                // Respond with our stream
                return new Response(stream, {
                    headers: { "Content-Type": "text/html" },
                }).text();
            })
            .then((result) => {
                // Do things with result
                const regexp = /=".*(\.jpg|\.png)"/gm;
                const array = [...result.matchAll(regexp)];
                array.forEach((e) => {
                    illustrationsList.push(FETCH_URL_ILLUSTRATIONS +projectName+ e["0"].substring(2, e["0"].length - 1));
                });
                resolve(illustrationsList);
            });
      });
    
}