import axios from "axios";

class MovieDataService{

    // class will contain functions which make the api calls and return the info from the api calls
    getAll(page = 0){ // default page 0
        return axios.get(`http://guarded-savannah-47368.herokuapp.com/api/v1/movies?page=${page}`)
    }

    get(id){         
        return axios.get(`http://guarded-savannah-47368.herokuapp.com/api/v1/movies/id/${id}`)
    }   
    
    // query consist of the actual search title, or ratings e.g. rated=G
    find(query, by = "title", page = 0){
        return axios.get(`http://guarded-savannah-47368.herokuapp.com/api/v1/movies?${by}=${query}&page=${page}`)
    }       

    createReview(data){
        return axios.post("http://guarded-savannah-47368.herokuapp.com/api/v1/movies/review", data)
    }
    updateReview(data){
        return axios.put("http://guarded-savannah-47368.herokuapp.com/api/v1/movies/review", data)
    }
    deleteReview(id, userId){                
        return axios.delete(`http://guarded-savannah-47368.herokuapp.com/api/v1/movies/review`,{data:{review_id: id, user_id: userId}})        
    }
    getRatings(){
        return axios.get("http://guarded-savannah-47368.herokuapp.com/api/v1/movies/ratings")
    }    
}

export default new MovieDataService()