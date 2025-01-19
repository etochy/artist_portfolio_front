const FETCH_URL_ILLUSTRATIONS = "https://launay-esteban.ovh/public_files/illustrations_lola/projets.json";

let infosProjets = undefined;

function readFileInfo() {
    return new Promise(resolve => {
        if (infosProjets === undefined) {
            fetch(FETCH_URL_ILLUSTRATIONS)
                .then((response) => response.json())
                .then((json) => {
                    infosProjets = json;
                    resolve(json);
                });
        } else {
            resolve(infosProjets);
        }

    })
}

export async function getProjectDetails(projectName) {
    await readFileInfo();
    const projectList = infosProjets.projets;

    let projet = undefined;
    projectList.forEach(p => {
        if (p.path === projectName)
            projet = p;
    });

    return mapProject(projet);
}

export async function getTagsDetails(idTag) {
    await readFileInfo();
    const tagList = infosProjets.tags;

    let tag = undefined;
    tagList.forEach(t => {
        if (t.id === idTag)
            tag = t;
    });

    return tag;
}

export async function getProjetsForTag(idTag) {
    await readFileInfo();
    const projectList = infosProjets.projets;

    let projets = [];
    projectList.forEach(p => {
        p.tags.forEach(t => {
            if (t.id === idTag)
                projets.push(mapProject(p));
        });
    });

    return projets;
}

export async function getIllustraDetails(illustrationName) {
    await readFileInfo();
    const illustrationsList = await readFileInfo().infosProjets.illustrations;

    let illustration = undefined;
    illustrationsList.forEach(i => {
        if (i.path === illustrationName)
        illustration = i;
    });

    return {
        id: illustration.id,
        name: illustration.title,
        description: illustration.description,
        illustration: FETCH_URL_ILLUSTRATIONS + illustration.path + illustration.mainImg,
        illustrationName: illustrationName
    };
}

export function mapProject(projet) {
    return {
        id: projet.id,
        name: projet.title,
        description: projet.description,
        illustration: `${FETCH_URL_ILLUSTRATIONS}${projet.path}/${projet.mainImg}` ,
        projectName: projet.path,
        tags: projet.tags
    };
}
