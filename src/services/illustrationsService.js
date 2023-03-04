const FETCH_URL_ILLUSTRATIONS = "https://launay-esteban.ovh/public_files/illustrations_lola/illustrations/";

export function getAllIllustrations() {
    let illustrationsList = [];
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
                // Do things with result
                const regexp = /=".*(\.jpg|\.png)"/gm;
                const array = [...result.matchAll(regexp)];
                array.forEach((e) => {
                    illustrationsList.push({
                        name: "",
                        illustration: FETCH_URL_ILLUSTRATIONS + e["0"].substring(2, e["0"].length - 1)
                    })
                });
                resolve(illustrationsList);
            });
      });
    
}


