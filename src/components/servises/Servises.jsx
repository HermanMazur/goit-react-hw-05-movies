
import axios from "axios";


export async function TrendMoviesFetch (){
const response =  await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=b4a9604d912adcda3dc38f0ba7bfa255')  

    return response.data.results;
}


export async function SearchMoviesFetch(input) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=b4a9604d912adcda3dc38f0ba7bfa255&language=en-US&page=1&include_adult=false`)
    return response.data.results;
};

export async function MovieDetalisFetch(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b4a9604d912adcda3dc38f0ba7bfa255&language=en-US`);

    return response.data;
}

export async function MovieCreditsFetch(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b4a9604d912adcda3dc38f0ba7bfa255&language=en-US`);

    return response.data;
}

export async function MovieReviewsFetch(id) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b4a9604d912adcda3dc38f0ba7bfa255&language=en-US&page=1`)

    return response.data.results;
}
