import axios from "axios";


export const inatanceAxios = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        'api_key':'7a1c19ea3c361a4d3cc53eb70ef8298c'
    }
})