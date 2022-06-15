import { remove, get, save, getAllMoviesWithRating} from './model.js';
import { render } from './view.js';
import { render as form } from './form.js';

export async function listAction(request, response) {
    const data = await getAllMoviesWithRating(request.user.id);
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
    let movie = {};
    movie.title = request.body.title;
    movie.year = request.body.year;
    if (request.body.public === "public"){
        movie.public = true;
    }
    else{
        movie.public = false;
        movie.user = request.user.id;
    }
    if (request.body.id !== null && request.body.id !== undefined&& request.body.id !== ""){
        movie.id = request.body.id;
    }

    await save(movie);
    response.redirect(request.baseUrl);
}