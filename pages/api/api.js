import axios from 'axios'

const similarMovieApi = "http://localhost:5000/similar_movies";
const similarUserApi = "http://localhost:5000/similar_users";

const requiredHeader = {
    headers: {
        'Accept' : "*/*"
    }
}


export const searchSimilarMovies = (dbType, movieName) => {
    return axios.get(`${similarMovieApi}/${dbType}/${movieName}`, requiredHeader);
}

export const searchSimilarUsers = (dbType, userId) => {
    return axios.get(`${similarUserApi}/${dbType}/${userId}`, requiredHeader )
}
