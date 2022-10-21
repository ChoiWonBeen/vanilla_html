import { request } from "../modules/index.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodo = async () => await request(BASE_URL);
