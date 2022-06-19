import {Users} from "../model/model.js";

export async function get(query = {}) {

    if (!query) {
        return {};
    }
    let options = {where: query};
    console.log(options);
    return await Users.findOne(options);
}