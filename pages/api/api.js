import axios from 'axios'

const similarMovieApi = "http://localhost:5000/similar_movies";
const RecommendedMovieApi = "http://localhost:5000/recommended_movies_for_user";

const requiredHeader = {
    headers: {
        'Accept' : "*/*"
    }
}


export const searchSimilarMovies = (dbType, movieName) => {
    return axios.get(`${similarMovieApi}/${dbType}/${movieName}`, requiredHeader);
}

export const searchRecommendedMovies = (dbType, userId) => {
    return axios.get(`${RecommendedMovieApi}/${dbType}/${userId}`, requiredHeader)
}
