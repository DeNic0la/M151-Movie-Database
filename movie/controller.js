import { getAll, remove, get, save } from './model.js';
import { render } from './view.js';
import { render as form } from './form.js';

export async function listAction(request, response) {
    const data = await getAll(request.user.id).catch(reason => console.log(reason));
    const body = render(data);
    response.send(body);
}

export async function removeAction(request, response) {
    const id = parseInt(request.params.id, 10);
    await remove(id,request.user.id);
    response.redirect(request.baseUrl);
}

export async function formAction(request, response) {
    let movie = { id: '', title: '', year: '', public: ''};

    if (request.params.id) {
        movie = await get(parseInt(request.params.id,  10), request.user.id);
    }

    console.log(movie);

    const body = form(movie);
    response.send(body);
}

export async function saveAction(request, response) {
    let movie = null;
    if (request.body.public === "public"){
        movie = {
            id: request.body.id,
            title: request.body.title,
            year: request.body.year,
            public: true,
        };
    }
    else {
        movie = {
            id: request.body.id,
            title: request.body.title,
            year: request.body.year,
            public: false,
            user: request.user.id,
        };
    }
    await save(movie);
    response.redirect(request.baseUrl);
}