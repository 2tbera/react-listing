import axios from "axios";

export const api = axios.create({ baseURL: 'https://api.instantwebtools.net/v1' });
